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