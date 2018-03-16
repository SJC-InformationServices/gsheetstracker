function entity(type){
    this.type = type;
    try{
    this.apiUrl = PropertiesService.getScriptProperties().getProperty("APIURL");
    this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));
    this.sheet = this.doc.getSheetByName("Sheet1");
    this.lastCol = this.sheet.getLastColumn();
    this.lastRow = this.sheet.getLastRow();
    this.attributes = this.sheet.getRange(1,1,1,this.lastCol).getValues();
    this.records = this.sheet.getRange(2,1,this.lastRow,this.lastCol).getValues();
    this.drawDataTable = function()
    {
    var attribs = this.attributes;
    
    var tbl = '<table id="'+this.type+'TABLE" class="display compact" width="98%" cellspacing="0"><thead><tr>';
    
      for (var i = 0; i<attribs.length;i++)
      { 
            tbl+= "<th>"+attribs[i]+"</th>";
      }
      tbl += "</tr></thead><tbody></tbody></table>";
         
    return tbl;
    };
    this.tableHead = this.drawDataTable();

    }catch(e){
        this.doc = "";
        this.sheet ="";
        this.attributes ="";
        this.records = "";
    }
    
    return this;
}
function renderEntityTable(type){
    /*<?!= HtmlService.createTemplateFromFile('navTabsOffers').evaluate().getContent() ?>        */
    var et = new entity(type);
    return et.drawDataTable();

}