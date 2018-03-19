function insertRecord(obj)
{
    try{
        var type = obj[0];
        var et = new entity(obj[1]);
        return et.insert(o);
    }catch(e){
        return JSON.stringify(["error", e.message,type,keyval]);
    }
}

function recordsExists(type,upc)
{
    try{
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        var keys = PropertiesService.getScriptProperties().getProperty('KEYFIELDS');
        var attributes = getAttributes(type);
        var colKey = attributes.indexOf("UPC");
        var doc = SpreadsheetApp.openById(prop);
        var sheet = doc.getSheetByName("Sheet1");
        var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();
        var lookup = sheet.getRange(2,colKey,lastRow,1).getValues().findIndex(upc);
        if(lookup != -1){
            return sheet.getRange(lookup+1,1,1,lastCol).getValues();
        }else{
            return false;
        }        
     }
     catch(e)
     {
        return JSON.stringify(["error", e.message,type,keyval]);
    }
}