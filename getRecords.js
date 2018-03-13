function getRecords(type)
{
    try{
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
        }
}