function renderDataTable(type)
{
    try{
    var et = new entity(type);
    return {type:type,rec:JSON.parse(JSON.stringify(et.records))};
    }catch(e){
        return [type,[],e];
    }
}