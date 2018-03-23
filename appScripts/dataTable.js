function getDataTableAttributes(type)
{
    try{
    var et = new entity(type);
    return {type:type,rec:JSON.parse(JSON.stringify(et.records)),attributes:JSON.parse(JSON.stringify(et.attributes))};
    }catch(e){
        return {err:e,type:type,rec:JSON.parse(JSON.stringify([])),attributes:JSON.parse(JSON.stringify([]))};
    }
}

function insertRecord(obj)
{
    try
    {        
        return JSON.stringify(this.sjcArchiveOutput.createModel(obj));
        //continue here
    }catch(e){
        return JSON.stringify(["error", e.message,obj,this.sjcArchiveOutput]);
    }
}

function updateRecord(type,keyval,row)
{    
return [type,keyval];
/*try{
    var prop = PropertiesService.getScriptProperties().getProperty(type);
    if(prop)
    {
        var doc = SpreadsheetApp.openById(prop);
        var sheet = doc.getSheetByName("Sheet1");
        var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();
            
        var cols = sheet.getRange(2,1,lastRow-1,lastCol);
        var values = cols.getValues();
        return values;
    }else{
        return false;
    }}
    catch(e){
        return false;
    }*/
}
