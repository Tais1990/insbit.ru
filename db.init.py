from db import manager
from typing import Any
def main(args: Any = None) -> None:
    manager.coursesCreateTable()
def migration1(args: Any = None) -> None:
    manager.coursesAddColumn();
if __name__ == '__main__':
    main()
    #migration1()