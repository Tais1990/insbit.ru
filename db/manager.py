import peewee
from db.dbhandle import *
from db.models import *

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
                'htmlContent' : record.htmlContent
            })
        return courses_data
    except peewee.InternalError as px:
        print(str(px))
        return 0

# считываем необходимые данные из таблицы
def coursesSelect(code):
    try:
        #dbhandle.connect()
        course = Courses.select().where(Courses.code == code.strip()).get()
        #print(course);
        courses_data = []
        courses_data.append({
                'id': course.id,
                'code': course.code,
                'name': course.name,
                'description': course.description,
                'numberCode' : course.numberCode,
                'forWhom' : course.forWhom,
                'duration' : course.duration,
                'knowledgeRequired' : course.knowledgeRequired,
                'result' : course.result,
                'htmlContent' : course.htmlContent
            })
        return courses_data
    except peewee.InternalError as px:
        print(str(px))
        return 0

#добавление записи
def coursesAdd(code, name, description, numberCode, forWhom, duration, knowledgeRequired, result, htmlContent):
    row = Courses(
        name = name,
        code = code.lower().strip(),
        description = description,
        numberCode = numberCode,
        forWhom = forWhom,
        duration = duration,
        knowledgeRequired = knowledgeRequired,
        result = result,
        htmlContent = htmlContent
    )
    row.save()

#изменение записи
#возможно стоит держать разностные изменения
def coursesEdit(code, name, description, numberCode, forWhom, duration, knowledgeRequired, result, htmlContent):
    course = Courses.select().where(Courses.code == code.strip()).get()
    course.name = name;
    course.description = description;
    course.numberCode = numberCode;
    course.forWhom = forWhom;
    course.duration = duration;
    course.knowledgeRequired = knowledgeRequired;
    course.result = result;
    course.htmlContent = htmlContent;
    course.save()

def coursesEditSmall(code, name, description, numberCode, forWhom, duration, knowledgeRequired, result):
    course = Courses.select().where(Courses.code == code.strip()).get()
    course.name = name;
    course.description = description;
    course.numberCode = numberCode;
    course.forWhom = forWhom;
    course.duration = duration;  
    course.knowledgeRequired = knowledgeRequired; 
    course.result = result;
    
    course.save()