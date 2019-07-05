from peewee import *
from db.dbhandle import *
from peewee import TextField
from playhouse.postgres_ext import ArrayField
 
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
    description = CharField(max_length=10000)
    numberCode = CharField(max_length=6)
    forWhom = CharField(max_length=1000)
    duration = CharField(max_length=100)
    knowledgeRequired = ArrayField(TextField, default=[])
    result = ArrayField(TextField, default=[])
    htmlContent = TextField()


    class Meta:
        db_table = "courses"
        order_by = ('code',)