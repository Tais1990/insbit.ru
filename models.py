from peewee import *

dbhandle = PostgresqlDatabase('insbit', user='postgres', password='123',
                           host='127.0.0.1', port=5432)
 
class BaseModel(Model):
    class Meta:
        database = dbhandle
 
 
class Category(BaseModel):
    id = PrimaryKeyField(null=False)
    name = CharField(max_length=100)

 
    class Meta:
        db_table = "categories"
        order_by = ('name',)