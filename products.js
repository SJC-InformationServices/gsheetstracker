
function getProductFields(){
    try{
    var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('PRODUCTS'));
    var sheet = doc.getSheetByName("Sheet1");
    var cols = sheet.getRange(1,1,1,sheet.getLastColumn());
    var values = cols.getValues();
    return values[0];
    }catch(e){
        return ["NO FIELDS",e.message,productsTableId];
    }
};

function getProducts(upc)
{
    if(upc == ""){
        try{
            var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('PRODUCTS'));
            var sheet = doc.getSheetByName("Sheet1");
            var cols = sheet.getRange(2,1,sheet.getLastRow(),sheet.getLastColumn());
            var values = cols.getValues();
            return values[0];
            }catch(e){
                return [];
            }
    }else{
     
        

    }
}

