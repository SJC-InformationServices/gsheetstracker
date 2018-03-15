function entity(type){
    this.type = type;
    try{
    this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));

    this.sheet = this.doc.getSheetByName("Sheet1");
    this.lastCol = this.sheet.getLastColumn();
    this.lastRow = this.sheet.getLastRow();
    this.attributes = this.sheet.getRange(1,1,1,this.lastCol).getValues();
    this.records = this.sheet.getRange(2,1,this.lastRow,this.lastCol).getValues();
    }catch(e){
        this.doc = "";
        this.sheet ="";
        this.attributes ="";
        this.records = "";
    }
    
    return this;
}