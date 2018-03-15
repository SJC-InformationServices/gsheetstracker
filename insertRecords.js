function insertRecord(type,keyval)
{
    var prop = PropertiesService.getScriptProperties().getProperty(type);
return [type,keyval];
}