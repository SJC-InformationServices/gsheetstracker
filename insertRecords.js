function insertRecord(type,keyval)
{
    try{
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        if(prop){
            var doc = SpreadsheetApp.openById(prop);
            var sheet = doc.getSheetByName("Sheet1");
            var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();

            var cols = sheet.getRange(1,1,1,lastCol).getValues()[0];
            return JSON.stringify([type,JSON.parse(keyval),cols]);
        }
        return JSON.stringify(["no prop",type,keyval]);        
    }catch(e){
        return JSON.stringify(["error", e.message,type,keyval]);
    }

}