import peewee
from dbhandle import *
from models import *

def find_all_categories():
    return Category.select()
 
if __name__ == '__main__':
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
		 
        print(product_data)
    except peewee.InternalError as px:
        print(str(px))