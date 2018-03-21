function entity(type){
    this.type = type;

    this.apiUrl = PropertiesService.getScriptProperties().getProperty("APIURL");
    this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));
    this.sheet = this.doc.getSheetByName("Sheet1");
    this.lastCol = this.sheet.getLastColumn();
    this.lastRow = this.sheet.getLastRow();
    this.attributes = this.sheet.getRange(1,1,1,this.lastCol).getValues()[0];
    this.records = this.sheet.getRange(2,1,this.lastRow,this.lastCol).getValues();
    /*switch(type){
        case "TRACKING":
        this.model = new TRACKING();
        break;
        case "IMAGES":
        this.model = new IMAGES();
        break;
        case "PRODUCTS":
        this.model = new PRODUCTS();
        break;
        case "OFFERS":
        this.model = new OFFERS();
        break;
    }*/
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

    this.findMatchByCol = function(col,value)
    {
        
    };
    this.insert = function(keyval)
    {
        return keyval()
        /*for(var i in keyval)
        {
            this.model.set(i,keyval[i]);
        }
        return this.model.toJson();
        /*var rowVals = [];
        var a = this.attributes;
        var findMatch = this.findMatchByCol("UPC",keyval.UPC);
        if(findMatch){
            return this.update(keyval);
        }
        keyval.CREATEDON = new Date();
        keyval.UPDATEDON= new Date();
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
        this.sheet.appendRow(rowVals);
        
        return this.sheets.getRange(this.lastRow+1,1,1,this.lastCol).getValues()[0];*/
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
    
    
    return this;
}
