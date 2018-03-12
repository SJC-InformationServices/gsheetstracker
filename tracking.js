
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
function getTracking(upc=0)
{
    if(upc == 0){

    }else{
     
        try{
            var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('TRACKING'));
            var sheet = doc.getSheetByName("Sheet1");
            var cols = sheet.getRange(2,1,sheet.getLastRow(),sheet.getLastColumn());
            var values = cols.getValues();
            return values[0];
            }catch(e){
                return [];
            }

    }
}

