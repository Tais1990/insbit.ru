import asyncio
from typing import Dict
from concurrent.futures import ProcessPoolExecutor

import aiohttp_jinja2
from aiohttp import web

#from .worker import predict
from utils import Config


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


    #@aiohttp_jinja2.template('about1.html')
    #async def aboutName(self, request: web.Request) -> Dict[str, str]:
    #    return {'message': "321"}

    @aiohttp_jinja2.template('about1.html')
    async def aboutName(self, request: web.Request) -> Dict[str, str]:
        return {'message': request.match_info['name']}
        

            #"Hello, {}".format(request.match_info['name']))

    #@asyncio.coroutine
    #async def name(self, request: web.Response(
    #    text="Hello, {}".format(this.match_info['name']))) -> Dict[str, str]:
    #    return {}
    

    #def name(request):
    #return web.Response(
    #    text="Hello, {}".format(request.match_info['name']))

    async def predict(self, request: web.Request) -> web.Response:
        form = await request.post()
        raw_data = form['file'].file.read()
        executor = request.app['executor']
        r = self._loop.run_in_executor
        raw_data = await r(executor, predict, raw_data)
        # raw_data = predict(raw_data)
        headers = {'Content-Type': 'application/json'}
        return web.Response(body=raw_data, headers=headers)
