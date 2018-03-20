function renderDataTable(type)
{
    var et = new entity(type);
    return JSON.stringify([type,et.records]);
}