from peewee import *
import datetime
import json
from db.dbhandle import *
from peewee import TextField
from playhouse.postgres_ext import ArrayField
from playhouse.postgres_ext import JSONField
 
class BaseModel(Model):
    class Meta:
        database = dbhandle
# справочники
# вендор
class Vendors(BaseModel):
    id = PrimaryKeyField(null=False)
    code = CharField(max_length=1000)
    name = CharField(max_length=1000)
    #class Meta:
    #    db_table = "vendors"
    #    order_by = ('code')
# напрвление обучения
class TrainingPrograms(BaseModel):
    id = PrimaryKeyField(null=False)
    code = CharField(max_length=1000)
    name = CharField(max_length=1000)
    vendor = ForeignKeyField(Vendors)
    #class Meta:
    #    db_table = "trainingPrograms"
    #    order_by = ('code')

# основная таблица с курсами
class Courses(BaseModel):
    id = PrimaryKeyField(null=False)
    code = CharField(max_length=1000)
    name = CharField(max_length=50000)
    description = CharField(max_length=50000)
    numberCode = CharField(max_length=1000)
    forWhom = CharField(max_length=50000)
    duration = CharField(max_length=50000)
    knowledgeRequired = ArrayField(TextField, default=[])
    result = ArrayField(TextField, default=[])
    jsonContent = JSONField()
    cost = CharField(max_length=50000, default='')
    date = CharField(max_length=50000, default='')
    vendor = ForeignKeyField(Vendors)
    trainingProgram =  ForeignKeyField(TrainingPrograms)



    class Meta:
        db_table = "courses"
        order_by = ('code',)

# вспомогательные таблицы
# таблица для обратной связи
class Outbox(BaseModel):
    id = PrimaryKeyField(null=False)    
    name = CharField(max_length=1000)
    email = CharField(max_length=1000)
    phone = CharField(max_length=1000)
    message = CharField(max_length=50000)
    created_date = DateTimeField(default=datetime.datetime.now)
    send_date = DateTimeField(null = True)
    is_sended = BooleanField(default=False)
    textError = CharField(max_length=50000, null = True)
    