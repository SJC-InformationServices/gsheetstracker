function entity(type){
    this.type = type;
    try{
    this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));

    this.sheet = this.doc.getSheetByName("Sheet1");
    this.lastCol = this.sheet.getLastColumn();
    this.lastRow = this.sheet.getLastRow();
    this.attributes = this.sheet.getRange(1,1,1,this.lastCol).getValues();
    this.records = this.sheet.getRange(2,1,this.lastRow,this.lastCol).getValues();

    this.renderDTTable()
{
    var attribs = this.attributes;
    var records = this.records;

    var tbl = '<table id="'+this.type+'TABLE" class="display compact" width="98%" cellspacing="0"><thead><tr>';
    
      for (var i = 0; i<attribs.length;i++)
      { 
            tbl+= "<th>"+attribs[i]+"</th>";
      }
   tbl += "</tr></thead><tbody>";
    
    for (var i=0; i<records.length;i++)
    { 
      tbl += "<tr>";
        var row = records[i]; 
        for(var y=0;y<row.length;y++){
          tbl += "<td>" + row[y] + "</td>";
        }
      tbl += "</tr>";
    }
    tbl += "</tbody></table>";
    var x = [tbl,elid];
    return x;
}



    }catch(e){
        this.doc = "";
        this.sheet ="";
        this.attributes ="";
        this.records = "";
    }
    
    return this;
}