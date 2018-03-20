function renderDataTable(type)
{
    var et = new entity(type);
    return [type,et.records];
}