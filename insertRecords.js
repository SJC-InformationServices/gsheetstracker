function insertRecord(type,keyval)
{
    try{
        var prop = PropertiesService.getScriptProperties().getProperty(type);
        if(prop){
            var doc = SpreadsheetApp.openById(prop);
            var sheet = doc.getSheetByName("Sheet1");
            var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();

            var cols = sheet.getRange(1,1,1,lastCol).values();
            return [type,keyval,cols];
        }
        return [type,keyval];        
    }catch(e){
        return [e, type,keyval];
    }

}