function renderDataTable(type)
{
    try{
    var et = new entity(type);
    return {type:type,rec:et.records}
    }catch(e){
        return [type,[],e];
    }
}