
function getTrackingFields(){
    try{
    var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('TRACKING'));
    var sheet = doc.getSheetByName("Sheet1");
    var cols = sheet.getRange(1,1,1,sheet.getLastColumn());
    var values = cols.getValues();
    return values[0];
    }catch(e){
        return ["NO FIELDS",e.message,productsTableId];
    }
}
function getTracking(upc)
{
    try{
        var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('TRACKING'));
        var sheet = doc.getSheetByName("Sheet1");
        var lastRow = sheet.getLastRow();
        var lastCol = sheet.getLastColumn();

    if(upc == '')
    {       
        var cols = sheet.getRange(2,1,lastRow-1,lastCol);
        var values = cols.getValues();
        return values;
    }else
    {
     return [["tests","more records"]];
    }
    }catch(e){
        return [];
    }
}

