function insertRecord(type,keyval)
{
    try{
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        if(prop){
            var kv = JSON.parse(keyval);
            var doc = SpreadsheetApp.openById(prop);
            var sheet = doc.getSheetByName("Sheet1");
            var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();

            var cols = sheet.getRange(1,1,1,lastCol).getValues()[0];
            var id = sheet.getRange(1,1,lastRow,1).getValues()[0][0];
            return JSON.stringify([type,kv,cols,id]);
        }
        return JSON.stringify(["no prop",type,keyval]);        
    }catch(e){
        return JSON.stringify(["error", e.message,type,keyval]);
    }

}