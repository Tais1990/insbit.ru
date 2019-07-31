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
        return {
            'type': request.match_info['type']
            }

    @aiohttp_jinja2.template('course.html')
    async def aboutCourse(self, request: web.Request) -> Dict[str, str]:
        return {
            'nameTrainingPrograms': request.match_info['nameTrainingPrograms'],
            'nameCourse': request.match_info['nameCourse']}

    @aiohttp_jinja2.template('courseAll.html')
    async def courseAll(self, request: web.Request) -> Dict[str, str]:
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
        print('editCourse')
        try:
            form = await request.json()
            #manager.codeIsExist(form.get('code'))
            if form.get('type') == 'edit':
                manager.coursesEdit(form.get('code'), form.get('name'), 
                    form.get('description'), form.get('numberCode'), 
                    form.get('forWhom'), form.get('duration'),
                    form.get('knowledgeRequired'), form.get('result'), form.get('htmlContent'),
                    form.get('cost'), form.get('date'), form.get('vendor'))
            else:
                manager.coursesAdd(form.get('code'), form.get('name'), 
                    form.get('description'), form.get('numberCode'), 
                    form.get('forWhom'), form.get('duration'),
                    form.get('knowledgeRequired'), form.get('result'), form.get('htmlContent'),
                    form.get('cost'), form.get('date'))
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
