function renderDataTable(type)
{
    try{
    var et = new entity(type);
    return {type:type,rec:JSON.parse(JSON.stringify(et.records)),attributes:JSON.parse(JSON.stringify(et.attributes))};
    }catch(e){
        return {err:e,type:type,rec:JSON.parse(JSON.stringify(et.records)),attributes:JSON.parse(JSON.stringify(et.attributes))};
    }
}