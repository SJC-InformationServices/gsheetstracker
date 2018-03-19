function entity(type){
    this.type = type;
    try{
    this.apiUrl = PropertiesService.getScriptProperties().getProperty("APIURL");
    this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));
    this.sheet = this.doc.getSheetByName("Sheet1");
    this.lastCol = this.sheet.getLastColumn();
    this.lastRow = this.sheet.getLastRow();
    this.attributes = this.sheet.getRange(1,1,1,this.lastCol).getValues()[0];
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

    this.getRecordsByRange = function(frRow,frCol,toRow,toCol){
        return $this.sheet.getRange(frRow,frCol,toRow,toCol)[0];
    };
    this.findMatchByCol = function(col,value)
    {
        var c = this.attributes.indexOf(col);
        var data = this.sheet.getRange(2,c,this.lastRow,1)[0];
        var index=-1;
        for(var i=0;i<data.length;i++){
            if(data[i]==value){
                index = i+1;
            }
        }
        return this.getRecordsByRange(index,1,1,this.lastCol);
    };
    this.insert = function(keyval)
    {
        var rowVals = [];
        var a = this.attributes;
        for(var i=0;i<a.length;i++)
        {
            var attrib = a[i];
            if(typeof keyval[attrib] != 'undefined')
            {
                rowVals.push(attrib);
            }else{
                rowVals.push("");
            }
        }
        return [rowVals,keyval];
    };

    }catch(e){
        this.doc = "";
        this.sheet ="";
        this.attributes ="";
        this.records = "";
    }
    
    return this;
}
