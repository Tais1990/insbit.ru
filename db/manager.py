import peewee
from db.dbhandle import *
from db.migrator import *
from db.models import *

from playhouse.migrate import *

# Работа с курсом непосредственное
# создание таблицы
def coursesCreateTable():
    try:
        dbhandle.connect()
        Courses.create_table();
        return 1
    except peewee.InternalError as px:
        print(str(px))
        return 0
#добавление колонок стоимости и дат, хотя странно как-то
def coursesAddColumn():
    try:
        cost_field = CharField(max_length=1000, default='')
        date_field = CharField(max_length=1000, default='')
        migrate(
            migrator.add_column('courses', 'cost', cost_field),
            migrator.add_column('courses', 'date', date_field),
        )

        return 1
    except peewee.InternalError as px:
        print(str(px))
        return 0
# считываем все данные из таблицы
def coursesSelectAll():
    try:
        #dbhandle.connect()
        courses = Courses.select()
        courses_data = []
        for record in courses:
            courses_data.append({
                'id': record.id,
                'code': record.code,
                'name': record.name,
                'description': record.description,
                'numberCode' : record.numberCode,
                'forWhom' : record.forWhom,
                'duration' : record.duration,
                'knowledgeRequired' : record.knowledgeRequired,
                'result' : record.result,
                'htmlContent' : record.htmlContent,
                'cost' : record.cost,
                'date' : record.date
            })
        return courses_data
    except peewee.InternalError as px:
        print(str(px))
        return 0

# считываем необходимые данные из таблицы
def coursesSelect(code):
    try:
        #dbhandle.connect()
        course = Courses.select().where(Courses.code == code.strip()).limit(1)
        if bool(course):
            record = course.get()
            course_data = {
                'id': record.id,
                'code': record.code,
                'name': record.name,
                'description': record.description,
                'numberCode' : record.numberCode,
                'forWhom' : record.forWhom,
                'duration' : record.duration,
                'knowledgeRequired' : record.knowledgeRequired,
                'result' : record.result,
                'htmlContent' : record.htmlContent,
                'cost' : record.cost,
                'date' : record.date
            }
            return course_data
        else:
            return  None
    except peewee.InternalError as px:
        print('errror')
        print(str(px))
        return None

#добавление записи
def coursesAdd(code, name, description, numberCode, forWhom, duration, knowledgeRequired, result, htmlContent, cost, date):
    row = Courses(
        name = name,
        code = code.lower().strip(),
        description = description,
        numberCode = numberCode,
        forWhom = forWhom,
        duration = duration,
        knowledgeRequired = knowledgeRequired,
        result = result,
        htmlContent = htmlContent,
        cost = cost,
        date = date
    )
    row.save()

#изменение записи
#возможно стоит держать разностные изменения
def coursesEdit(code, name, description, numberCode, forWhom, duration, knowledgeRequired, result, htmlContent, cost, date):
    course = Courses.select().where(Courses.code == code.strip()).get()
    course.name = name;
    course.description = description;
    course.numberCode = numberCode;
    course.forWhom = forWhom;
    course.duration = duration;
    course.knowledgeRequired = knowledgeRequired;
    course.result = result;
    course.htmlContent = htmlContent;
    course.cost = cost;
    course.date = date;
    course.save()

#проверяем код на корректность, что такого ещё нет
def codeIsExist(code):
    try:
        course = Courses.select().where(Courses.code == code.strip())      
        return (bool(course))
    except peewee.InternalError as px:
        print(str(px))
        return 0
