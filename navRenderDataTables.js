function renderDataTable(type)
{
    try{
    var et = new entity(type);
    return [type,et.records];
    }catch(e){
        return [type,[],e];
    }
}