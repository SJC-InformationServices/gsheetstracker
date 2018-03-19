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
        return this.sheet.getRange(frRow,frCol,toRow,toCol);
    };
    this.findMatchByCol = function(col,value)
    {
        var c = this.attributes.indexOf(col)+1;
        
        var rec = this.sheet.getRange(2,c+1,this.lastRow).getValues();
        var foundIndex = rec.findIndex(value) + 1;
                
        if(foundIndex != -1)
        {
        return this.getRecordsByRange(foundIndex,1,1,this.lastCol).getValues();
        }else{
            return false;
        }
    };
    this.insert = function(keyval)
    {
        var rowVals = [];
        var a = this.attributes;
        var findMatch = this.findMatchByCol("UPC",keyval.UPC);
        for(var i=0;i<a.length;i++)
        {
            var attrib = a[i];
            if(typeof keyval[attrib] != 'undefined')
            {
                rowVals.push(keyval[attrib]);
            }else{
                rowVals.push("");
            }
        }
        return [rowVals,findMatch];
    };
    this.update =function(keyval){
        if(typeof keyval.ID != 'undefined' || typeof keyval.UPC != 'undefined'){
            if(keyval.ID > 0){

            }else if(keyval != ""){

            }
            else{

            }
        }
    };
    }catch(e){
        this.doc = "";
        this.sheet ="";
        this.attributes ="";
        this.records = "";
    }
    
    return this;
}
