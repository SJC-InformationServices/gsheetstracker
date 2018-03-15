function insertRecord(type,keyval)
{
    try{
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        if(prop){
            var doc = SpreadsheetApp.openById(prop);
            var sheet = doc.getSheetByName("Sheet1");
            var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();

            var cols = sheet.getRange(1,1,1,lastCol).values()[0];
            return JSON.stringify([type,keyval,cols]);
        }
        return ["no prop",type,keyval];        
    }catch(e){
        return ["error", e.message,type,keyval];
    }

}