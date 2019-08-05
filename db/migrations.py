from db import manager
from typing import Any
def migration1(args: Any = None) -> None:
    manager.vendorAdd('Microsoft', 'Microsoft');
    manager.vendorAdd('VMware', 'VMware');
    manager.vendorAdd('Huawei', 'Huawei');
    manager.vendorAdd('Cisco', 'Cisco');
    manager.vendorAdd('Juniper', 'Juniper');
    manager.vendorAdd('MikroTik', 'MikroTik');
    manager.vendorAdd('D-Link', 'D-Link');
    manager.vendorAdd('Avaya', 'Avaya');
    manager.vendorAdd('Asterisk', 'Asterisk');
    manager.vendorAdd('Citrix', 'Citrix');
    manager.vendorAdd('Lotus-IBM', 'Lotus, IBM');
    manager.vendorAdd('Project-Management-Methodology', 'Методология управления проектами');
    manager.vendorAdd('ITSM', 'ITSM');
    manager.vendorAdd('Information-Technology-Security', 'Безопасность информационных технологий');
    manager.vendorAdd('Structured-Cabling-Systems', 'Структурированные кабельные системы');
    manager.vendorAdd('AutoCAD', 'AutoCAD');
    manager.vendorAdd('Unix', 'Unix-подобные');
    manager.vendorAdd('Postgres-Professional', 'Postgres Professional');
    manager.vendorAdd('Oracle', 'Oracle');
    manager.vendorAdd('Programming', 'Программирование');
    manager.vendorAdd('Computer-graphics-and-web-design', 'Компьютерная графика и веб-дизайн');
    manager.vendorAdd('Custom-courses', 'Пользовательские курсы');

    manager.trainingProgramAdd('Microsoft-Office-365', 'Microsoft Office 365', 1);
    manager.trainingProgramAdd('Windows-10', 'Windows 10', 1);
    manager.trainingProgramAdd('Windows-8', 'Windows 8', 1);
    manager.trainingProgramAdd('Windows-7', 'Windows 7', 1);
    manager.trainingProgramAdd('Windows-Server-2016', 'Windows Server 2016', 1);
    manager.trainingProgramAdd('Windows-Server-2012', 'Windows Server 2012', 1);
    manager.trainingProgramAdd('Windows-Server-2008', 'Windows Server 2008', 1);
    manager.trainingProgramAdd('Azure', 'Azure', 1);
    manager.trainingProgramAdd('SQL-Server-2016', 'SQL Server 2016', 1);
    manager.trainingProgramAdd('SQL-Server-2014', 'SQL Server 2014', 1);
    manager.trainingProgramAdd('Lync-Server-2013', 'Lync Server 2013', 1);
    manager.trainingProgramAdd('Exchange-Server-2016', 'Exchange Server 2016', 1);
    manager.trainingProgramAdd('Exchange-Server-2013', 'Exchange Server 2013', 1);
    manager.trainingProgramAdd('SharePoint-Online-2019', 'SharePoint Online/2019', 1);
    manager.trainingProgramAdd('SharePoint-2016', 'SharePoint 2016', 1);
    manager.trainingProgramAdd('SharePoint-2017', 'SharePoint 2017', 1);
    manager.trainingProgramAdd('SharePoint-2013', 'SharePoint 2013', 1);
    manager.trainingProgramAdd('Project-2016', 'Project 2016', 1);
    manager.trainingProgramAdd('Project-2013', 'Project 2013', 1);
    manager.trainingProgramAdd('System-Center-Configuration-Manager', 'System Center Configuration Manager', 1);
    manager.trainingProgramAdd('System-Center', 'System Center', 1);
    manager.trainingProgramAdd('Application-Development', 'Разработка приложений', 1);
    manager.trainingProgramAdd('Visio', 'Visio', 1);

    manager.trainingProgramAdd('VMware', 'VMware', 2);
    manager.trainingProgramAdd('Huawei', 'Huawei', 3);
    manager.trainingProgramAdd('Cisco', 'Cisco', 4);
    manager.trainingProgramAdd('Juniper', 'Juniper', 5);
    manager.trainingProgramAdd('MikroTik', 'MikroTik', 6);
    manager.trainingProgramAdd('D-Link', 'D-Link', 7);
    manager.trainingProgramAdd('Avaya', 'Avaya', 8);
    manager.trainingProgramAdd('Asterisk', 'Asterisk', 9);
    manager.trainingProgramAdd('Citrix', 'Citrix', 10);
    manager.trainingProgramAdd('Lotus-IBM', 'Lotus, IBM', 11);
    manager.trainingProgramAdd('Project-Management-Methodology', 'Методология управления проектами', 12);
    manager.trainingProgramAdd('ITSM', 'ITSM', 13);
    manager.trainingProgramAdd('Information-Technology-Security', 'Безопасность информационных технологий', 14);
    manager.trainingProgramAdd('Structured-Cabling-Systems', 'Структурированные кабельные системы', 15);
    manager.trainingProgramAdd('AutoCAD', 'AutoCAD', 16);
    manager.trainingProgramAdd('Linux', 'Linux', 17);
    manager.trainingProgramAdd('Astra-Linux', 'Astra Linux', 17);
    manager.trainingProgramAdd('SUSE', 'SUSE', 17);
    manager.trainingProgramAdd('Ubuntu', 'Ubuntu', 17);
    manager.trainingProgramAdd('Red-Hat-Linux', 'Red Hat Linux', 17);
    manager.trainingProgramAdd('FreeBSD', 'FreeBSD', 17);    

    manager.trainingProgramAdd('Postgres-For-administrators', 'Для администраторов', 18);
    manager.trainingProgramAdd('Postgres-For-application-developers', 'Для разработчиков приложений', 18);

    manager.trainingProgramAdd('Oracle-For-administrators', 'Для администраторов', 19);
    manager.trainingProgramAdd('Oracle-For-application-developers', 'Для разработчиков приложений', 19);
    manager.trainingProgramAdd('Oracle-Information-Security', 'Информационная безопасность', 19);
    manager.trainingProgramAdd('Oracle-For-analysts', 'Для аналитиков', 19);

    manager.trainingProgramAdd('Python', 'Python', 20);
    manager.trainingProgramAdd('WEB-programming', 'WEB-программирование', 20);
    manager.trainingProgramAdd('Java', 'Java', 20);

    manager.trainingProgramAdd('Blender', 'Blender', 21);
    manager.trainingProgramAdd('Adobe-Photoshop', 'Adobe Photoshop', 21);
    manager.trainingProgramAdd('Autodesk', 'Autodesk', 21);
    manager.trainingProgramAdd('Corel', 'Corel', 21);

    manager.trainingProgramAdd('Microsoft-Office', 'Microsoft Office', 22);
    manager.trainingProgramAdd('LibreOffice', 'LibreOffice', 22);
    manager.trainingProgramAdd('OpenOffice.org', 'OpenOffice.org', 22);

    