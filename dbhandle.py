from peewee import *
# Connect to a Postgres database.
dbhandle = PostgresqlDatabase('insbit', user='postgres', password='123',
                           host='127.0.0.1', port=5432)