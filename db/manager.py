import peewee
from db.dbhandle import *
from db.models import *

def function():
    print('test')

def test():
    return {"id": "1", "name": "321"}

def find_all_categories():
    return Category.select()




def test1():
    try:
        dbhandle.connect()
        #Category.create_table()
        products = find_all_categories()
        product_data = []
        for product in products:
            product_data.append({
                'id': product.id,
                'name': product.name
            })
        print(products)
        return product_data
    except peewee.InternalError as px:
        print(str(px))


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
                'description': record.description
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
        print(course);
        courses_data = []
        courses_data.append({
                'id': course.id,
                'code': course.code,
                'name': course.name,
                'description': course.description
            })
        return courses_data
    except peewee.InternalError as px:
        print(str(px))
        return 0

#добавление записи
def coursesAdd(code, name, description):
    row = Courses(
        name=name.lower().strip(),
        code=code.lower().strip(),
        description=description.lower().strip(),
    )
    row.save()