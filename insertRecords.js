function insertRecord(type,keyval)
{
    try{
        var et = new entity(type);
        
        if(prop){
            var kv = JSON.parse(keyval);
            var doc = SpreadsheetApp.openById(prop);
            var sheet = doc.getSheetByName("Sheet1");
            var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();

            var cols = sheet.getRange(1,1,1,lastCol).getValues()[0];
            var id = sheet.getRange(2,1,lastRow,1).getValues();
            var ids = [].concat.apply([], id);
            var rec = recordsExists(type,kv.UPC);
            return JSON.stringify([type,kv,cols,Math.max.apply(null,ids)+1,[lastRow,lastCol]],rec);
        }
        return JSON.stringify(["no prop",type,keyval]);        
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