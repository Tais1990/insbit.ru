import asyncio
from typing import Dict
from concurrent.futures import ProcessPoolExecutor

import aiohttp_jinja2
from aiohttp import web

#from .worker import predict
from utils import Config

from db import manager

headersClientPermission = {
    'Access-Control-Allow-Origin': 'http://localhost:8081'
}
title_page_about_us = {
    'about': 'О нас',
    'privacy-policy': 'Политика конфиденциальности',
    'cancelation': 'Политика отмены',
    'contact': 'Контакты'
}

class SiteHandler:
    def __init__(self, conf: Config, executor: ProcessPoolExecutor) -> None:
        self._conf = conf
        self._executor = executor
        self._loop = asyncio.get_event_loop()

    @aiohttp_jinja2.template('index.html')
    async def index(self, request: web.Request) -> Dict[str, str]:
        return {}
    @aiohttp_jinja2.template('about.html')
    async def about(self, request: web.Request) -> Dict[str, str]:
        return {}
  
    @aiohttp_jinja2.template('aboutUs.html')
    async def aboutUs(self, request: web.Request) -> Dict[str, str]:
        title = 'Страница'
        try:
            title = title_page_about_us[request.match_info['type']]
        except Exception:
            print('Не нашли данных в словаре, для именования сотаниц')
        return {
            'type': request.match_info['type'],
            'title' : title
            }

    @aiohttp_jinja2.template('course.html')
    async def aboutCourse(self, request: web.Request) -> Dict[str, str]:
        return {
            'nameTrainingPrograms': request.match_info['nameTrainingPrograms'],
            'nameCourse': request.match_info['nameCourse']}

    @aiohttp_jinja2.template('courseAll.html')
    async def courseAll(self, request: web.Request) -> Dict[str, str]:
        return {}

    # страницы каталога
    @aiohttp_jinja2.template('catalog.html')
    async def catalog(self, request: web.Request) -> Dict[str, str]:
        return {}

    async def getAll(self, request: web.Request) -> Dict[str, str]:        
        res = manager.coursesSelectAll()
        return web.json_response(res, headers=headersClientPermission)
    
    # чёрный ход для фронтенда, чтобы в моменте верстки пропустить запросы от клиента
    # по окнчанию разработки - закрыть
    # в этот кусок мы даже не заходим. но в описании всё именно так, поэтом
    # на всякий случай оставлю
    async def getCourseOPTIONS(self, request: web.Request) -> Dict[str, str]:
        headers = {
            'Access-Control-Allow-Method': 'GET', 
            'Access-Control-Request-Headers ': 'Content-Type' ,
        }
        return web.Response(status=200, headers=headers)      

    async def getCourse(self, request: web.Request) -> Dict[str, str]:
        try:
            codeValue = request.rel_url.query['code']
            res = manager.coursesSelect(codeValue) 
            if res == None:
                return web.json_response(
                    {'ErrorText': "Not found course with code " + codeValue},
                    status=409,
                    headers= headersClientPermission
                    )
            else:
                return web.json_response(res,
                    status = 200,
                    headers=headersClientPermission)  
        except Exception:
            print('Неопознааная ошибка при работе с кодом ' + codeValue)
            return web.Response(
                status=500,
                headers=headersClientPermission)       
    
    async def predict(self, request: web.Request) -> web.Response:
        form = await request.post()
        raw_data = form['file'].file.read()
        executor = request.app['executor']
        r = self._loop.run_in_executor
        raw_data = await r(executor, predict, raw_data)
        # raw_data = predict(raw_data)
        headers = {'Content-Type': 'application/json'}
        return web.Response(body=raw_data, headers=headers)

    async def editCourse(self, request: web.Request) -> web.Response:
        try:
            form = await request.json()
            #manager.codeIsExist(form.get('code'))
            if form.get('type') == 'edit':
                manager.coursesEdit(form.get('code'), form.get('name'), 
                    form.get('description'), form.get('numberCode'), 
                    form.get('forWhom'), form.get('duration'),
                    form.get('knowledgeRequired'), form.get('result'), form.get('htmlContent'),
                    form.get('cost'), form.get('date'), form.get('vendor'), form.get('trainingProgram'))
            else:
                manager.coursesAdd(form.get('code'), form.get('name'), 
                    form.get('description'), form.get('numberCode'), 
                    form.get('forWhom'), form.get('duration'),
                    form.get('knowledgeRequired'), form.get('result'), form.get('htmlContent'),
                    form.get('cost'), form.get('date'), form.get('vendor'), form.get('trainingProgram'))
            headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8081'
                }
            return web.Response(status=200, headers=headers)
        except Exception:
            print('Неопознанная ошибка')
            return web.Response(status=500, headers=headers)

    @aiohttp_jinja2.template('courseEdit.html')
    async def adminEditCourse(self, request: web.Request) -> Dict[str, str]:
        return {
            'nameTrainingPrograms': request.match_info['nameTrainingPrograms'],
            'nameCourse': request.match_info['nameCourse']}

    @aiohttp_jinja2.template('courseEdit.html')
    async def adminCreateCourse(self, request: web.Request) -> Dict[str, str]:
        return {}

    async def getNewCode(self, request: web.Request) -> Dict[str, str]:
        strCode = 'code'
        number = len(manager.coursesSelectAll()) + 1 
        index =  0
        while (manager.codeIsExist(strCode + str(number))) and (index < 100):            
            number = number + 1 
        # по идее, необходимо цапануть по рекурсии вычисление кода до талого, но пока оставляем так                   
        res = {"code": strCode + str(number)}
        return web.json_response(res, 
            headers=headersClientPermission)

    async def getVendorsAll(self, request: web.Request) -> Dict[str, str]:        
        res = manager.vendorSelectAll()
        return web.json_response(res, headers=headersClientPermission) 
    async def getTrainingProgramsAll(self, request: web.Request) -> Dict[str, str]:        
        res = manager.trainingProgramSelectAll()
        return web.json_response(res, headers=headersClientPermission)
# создания сообщения обратной связи
    async def createOutbox(self, request: web.Request) -> web.Response:
        headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8081'
        }
        #try:
        form = await request.json()
        manager.outboxAdd(form.get('name'), form.get('email'), form.get('phone'), form.get('message'))            
        return web.Response(status=200, headers=headers)
        #except Exception:
        #    print('Неопознанная ошибка')
        #    return web.Response(status=500, headers=headers) 
