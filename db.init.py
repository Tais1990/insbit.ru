from db import manager
from typing import Any
def main(args: Any = None) -> None:
    #manager.coursesCreateTable()
    manager.coursesAdd('code2', 
        'Курс "Администрирование и устранение неполадок в Office 365"', 
        'Этот трехдневный курс обучения под руководством инструктора, предназначенный для специалистов по информационным технологиям (ИТ),'+
        ' которые участвуют в администрировании, настройке, устранении неполадок и эксплуатации служб Office 365, включая их идентификационные данные, зависимости, требования и поддержку. технологии.'+
        ' Этот курс посвящен навыкам, необходимым для администрирования и устранения неполадок клиента Office 365 и ключевых служб Office 365, таких как Exchange Online, SharePoint Online и Skype для бизнеса. Он также охватывает функции безопасности и соответствия требованиям Office 365.',  
        '10997B',
        'Этот курс предназначен для ИТ-специалистов и системных администраторов, которые хотят узнать о методах администрирования и устранения неполадок в Office 365.'
        +' Эти специалисты должны иметь как минимум трехлетний опыт работы в соответствующих областях: в идеале - в области системного администрирования, сетевого администрирования, и обмен сообщениями.',
        '3 дня – 24 ак. часа',
        ["Минимум два года опыта администрирования операционной системы Windows Server, включая Windows Server 2012 или новее.", "Минимум один год опыта работы с доменными службами Active Directory (AD DS)."],
        ["Описывать службы Office 365", "Администрировать Office 365 с помощью графической среды и Windows PowerShell"],
        '<ol> <li>Обзор служб Office 365 <ol> <li>Обзор служб Office 365</li><li>Обзор лицензирования Office 365</li><li>Конфигурация клиента Office 365</li><li>Клиенты Office 365</li><li>Обзор услуг Office 365 (Лаб. раб)</li></ol></li>'+
        '<li>Администрирование, инструменты и методы Office 365<ol><li>Управление Office 365 с помощью административных порталов</li><li>Управление Office 365 с помощью Windows PowerShell</li><li>Управление административным доступом в Office 365</li><li>Устранение неполадок администрирования в Office 365</li><li>Администрирование Office 365(Лаб. раб)</li></ol></li></ol>')

if __name__ == '__main__':
    main()