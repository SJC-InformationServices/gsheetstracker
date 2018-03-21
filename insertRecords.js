var googleParent = this;
function insertRecord(obj)
{
    try{
        var type = obj.type;
        var et = new entity(type,googleParent[type]());
        return et.insert(obj.record);
    }catch(e){
        return JSON.stringify(["error", e.message,obj]);
    }
}
