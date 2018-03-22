var sjcSheetAdmin = Object.create(null,{
    type:{value:null},
    sheetName:{value:"Sheet1"},
    uniqueKey:{value:"UPC"},
    docKey:{
        get:function(){
            return PropertiesService.getScriptProperties().getProperty(this.type);
        }
    },
    doc:{
        get:function(){
            return SpreadsheetApp.openById(this.docKey);
        }
    },
    sheet:{
        get:function()
        {
            return this.doc.getSheetByName(this.sheetName);
        }
    },
    lastRow:{
        get:function(){
            return this.sheet.getLastRow();
        }
    },
    lastCol:{
        get:function(){
            return this.sheet.getLastRow();
        }
    },
    keys:{
        get:function(){
        return this.sheet.getRange(1,1,1,this.lastCol).getValues()[0];
        }
    },
    records:{
        value:function(){
            return this.sheet.getRange(2,1,this.lastRow,1).getValues();
        }
    },
    nextId:{
        get:function(){
            var rng = this.sheet.getRange(2,1,this.lastRow,1).getValues();
            var nextKey = Math.max.apply(null,rng);
            return nextKey;
        }
    },
    searchByCol:{
        value:function(col,value){
            var c = this.properties[col].colIndex;
            var r = this.lastRow();
    
            var rec = this.sheet.getRange(2,c+1,this.lastRow).getValues();
            var foundIndex = rec.findIndex(value);
                    
            if(foundIndex != -1)
            {
                var nextRow = this.sheet.getRange(foundIndex+2,1).getRowIndex();
                return this.sheet.getRange(nextRow,1,1,this.lastCol()).getValues()[0];
            }else{
                return false;
            }
        }
    },
    insert:{
        value:function(keyval)
        {
            if(this.uniqueKey == null)
            {
                var uk = this.uniqueKey;
                var isUnique = this.searchByCol(uk,keyval[uk]);
                if(isUnique){
                    return false;
                }
            }
            var rowVals = [];
            var a = this.keys;
            keyval.ID = this.nextId;
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
            return keyval.ID;
        }
    },
    update:{
        value:function(id,keyval){
            var c_row = this.searchByCol("ID",id);

        }
    },
   remove:{
       value:function(id){
           var c_row = this.searchByCol("ID",id);
           
       }
   }

});