import pathlib

from aiohttp import web

from views import SiteHandler

PROJECT_PATH = pathlib.Path(__file__).parent

#http://fil-andrey.blogspot.com/2015/12/aiohttp-http-client.html
def init_routes(app: web.Application, handler: SiteHandler) -> None:
    add_route = app.router.add_route

    add_route('GET', '/', handler.index, name='index')
    add_route('GET', '/about', handler.about, name='about')
    add_route('GET', '/about/{name}', handler.aboutName, name='aboutName')

    add_route('GET', '/{nameTrainingPrograms}/course/{nameCourse}', handler.aboutCourse, name='aboutCourse')
    add_route('GET', '/courseAll', handler.courseAll, name='courseAll')

    add_route('GET', '/api/getAll', handler.getAll, name = 'getAll')
    add_route('GET', '/api/getCourse', handler.getCourse, name = 'getCourse')
    # вспомогательный не очень нужный кусок
    add_route('OPTIONS', '/api/getCourse', handler.getCourseOPTIONS, name = 'getCourseOPTIONS')

    add_route('POST', '/api/editCourse', handler.editCourse, name='editCourse')
    add_route('GET', '/api/getNewCode', handler.getNewCode, name = 'getNewCode')

    # админка. как появятся сесии - ПЕРЕПИСАТЬ!!!!
    add_route('GET', '/admin/Yx5wvGduYsGrYwTKojFR/{nameTrainingPrograms}/course/{nameCourse}', handler.adminEditCourse, name='adminEditCourse')
    add_route('GET', '/admin/Yx5wvGduYsGrYwTKojFR/courseCreate', handler.adminCreateCourse, name='adminCreateCourse')

    add_route('POST', '/predict', handler.predict, name='predict')

    # added static dir
    app.router.add_static(
        '/static/', path=(PROJECT_PATH / 'static'), name='static'
    )
