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