import peewee
from models import *

dbhandle = PostgresqlDatabase('insbit', user='postgres', password='123',
                           host='127.0.0.1', port=5432)
 
if __name__ == '__main__':
    try:
        dbhandle.connect()
        Category.create_table()
    except peewee.InternalError as px:
        print(str(px))