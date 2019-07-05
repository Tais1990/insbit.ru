from peewee import *
from db.dbhandle import *
 
class BaseModel(Model):
    class Meta:
        database = dbhandle
 
 
class Category(BaseModel):
    id = PrimaryKeyField(null=False)    
    name = CharField(max_length=100)    

 
    class Meta:
        db_table = "categories"
        order_by = ('name',)

class Courses(BaseModel):
    id = PrimaryKeyField(null=False)
    code = CharField(max_length=100)
    name = CharField(max_length=100)
    description = CharField(max_length=1000)

    class Meta:
        db_table = "courses"
        order_by = ('code',)