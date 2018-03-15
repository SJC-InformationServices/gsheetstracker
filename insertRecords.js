function insertRecord(type,keyval)
{
    try{
        var db = new PouchDB(type);
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        if(prop){
            var kv = JSON.parse(keyval);
            var doc = SpreadsheetApp.openById(prop);
            var sheet = doc.getSheetByName("Sheet1");
            var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();

            var cols = sheet.getRange(1,1,1,lastCol).getValues()[0];
            var id = sheet.getRange(2,1,lastRow,1).getValues();
            var ids = [].concat.apply([], id);
            return JSON.stringify([type,kv,cols,Math.max.apply(null,ids)+1,[lastRow,lastCol]]);
        }
        return JSON.stringify(["no prop",type,keyval]);        
    }catch(e){
        return JSON.stringify(["error", e.message,type,keyval]);
    }

}

function entityExists(type,keyval)
{
    try{
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        var keys = PropertiesService.getScriptProperties().getProperty('KEYFIELDS');
        var attributes = getAttributes(type);
        var colIndexes = {};
        
     }
     catch(e)
     {
        return JSON.stringify(["error", e.message,type,keyval]);
    }
}