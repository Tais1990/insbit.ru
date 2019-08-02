from db import manager
from db import migrations
from typing import Any
def main(args: Any = None) -> None:
    manager.dictionaryCreateTables()
    manager.coursesCreateTable()
    manager.outboxCreateTable()

#def migration1(args: Any = None) -> None:
#    manager.coursesAddColumn();

if __name__ == '__main__':
    main()
    migrations.migration1()