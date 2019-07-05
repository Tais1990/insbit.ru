import asyncio
from typing import Dict
from concurrent.futures import ProcessPoolExecutor

import aiohttp_jinja2
from aiohttp import web

#from .worker import predict
from utils import Config

from db import manager

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
  
    @aiohttp_jinja2.template('about1.html')
    async def aboutName(self, request: web.Request) -> Dict[str, str]:
        return {'message': request.match_info['name']}

    @aiohttp_jinja2.template('course.html')
    async def aboutCourse(self, request: web.Request) -> Dict[str, str]:
        return {
            'nameTrainingPrograms': request.match_info['nameTrainingPrograms'],
            'nameCourse': request.match_info['nameCourse']}

    async def getAll(self, request: web.Request) -> Dict[str, str]:
        
        #manager.coursesAdd('code1', 
        #    'Курс «Администрирование и устранение неполадок в Office 365»', 
        #    'Этот трехдневный курс обучения под руководством инструктора, предназначенный для специалистов по информационным технологиям (ИТ), которые участвуют в администрировании, настройке, устранении неполадок и эксплуатации служб Office 365, включая их идентификационные данные, зависимости, требования и поддержку. технологии. Этот курс посвящен навыкам, необходимым для администрирования и устранения неполадок клиента Office 365 и ключевых служб Office 365, таких как Exchange Online, SharePoint Online и Skype для бизнеса. Он также охватывает функции безопасности и соответствия требованиям Office 365.', 
        #    '10997B',
        #    'Этот курс предназначен для ИТ-специалистов и системных администраторов, которые хотят узнать о методах администрирования и устранения неполадок в Office 365. Эти специалисты должны иметь как минимум трехлетний опыт работы в соответствующих областях: в идеале - в области системного администрирования, сетевого администрирования, и обмен сообщениями.',
        #    '3 дня – 24 ак. часа',
        #    ["Минимум два года опыта администрирования операционной системы Windows Server, включая Windows Server 2012 или новее.", "Минимум один год опыта работы с доменными службами Active Directory (AD DS)."],
        #    ["Описывать службы Office 365", "Администрировать Office 365 с помощью графической среды и Windows PowerShell"],
        #    '<ul><li>первый модуль</li><li>второй модуль</li></ul>')
        #manager.coursesCreateTable()
        res = manager.coursesSelectAll()
        return web.json_response(res)
    
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
        code = request.rel_url.query["code"]
        res = manager.coursesSelect(code) 
        return web.json_response(res, 
            headers={
            'Access-Control-Allow-Origin': 'http://localhost:8081'
            })     
    
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
        form = await request.json()
        
        print(form.get('code'))
        #manager.coursesEdit()
       
        #raw_data = form['file'].file.read()
        #executor = request.app['executor']
        #r = self._loop.run_in_executor
        #raw_data = await r(executor, predict, raw_data)
        #raw_data = '{"code"}'
        manager.coursesEditSmall(form.get('code'), form.get('name'))
        headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8081'
            }
        return web.Response(status=200, headers=headers)
        #return web.Response(headers=headers)
