var TRACKING = {
    type:"TRACKING",
    docKey: PropertiesService.getScriptProperties().getProperty(this.type),
    doc:null,
    sheet:null,
    records:[],
    loadDocSheet:function(){
        if(this.doc == null){
        this.doc =SpreadsheetApp.openById(this.docKey); 
        this.sheet = this.doc.getSheetByName("Sheet1");
        return this.sheet;
        }else{
            return this.sheet;
        }
    },
    lastRow:function(){
        if(this.doc == null){
            this.loadDocSheet();
        }
        return this.sheet.getLastRow();
    },
    lasCol:function(){
        if(this.doc == null){
            this.loadDocSheet();
        }
        return this.sheet.getLastColumn();
    },
    toJson:function(){
        var o= {};
        for(var i in this.properties){
            o[i]= this.properties[i].value;
        }
        return o;
    },
    properties:{
        ID:{colIndex:1,setter:this.loadById,value:null,updatedable:false},
        UPC:{colIndex:2,setter:this.loadByUpc,value:null,required:true,updatedable:true},
        TRACKED_UPC:{colIndex:3,setter:false,value:null,updatedable:true},
        DESCRIPTION:{colIndex:4,setter:false,value:null,updatedable:true},
        IN_SJC:{colIndex:5,setter:false,value:null,updatedable:true},
        IN_SJC_COUNT:{colIndex:6,setter:false,value:null,updatedable:true},
        OUT_SJC:{colIndex:7,setter:false,value:null,updatedable:true},
        OUT_SJC_COUNT:{colIndex:8,setter:false,value:null,updatedable:true},
        PHOTODONE:{colIndex:9,setter:false,value:null,updatedable:true},
        PHOTO_DONE_COUNT:{colIndex:10,setter:false,value:null,updatedable:true},
        RECORD_COMPLETE:{colIndex:11,setter:false,value:null,updatedable:true},
        LAST_USER:{colIndex:12,setter:false,value:null,updatedable:true},
        CREATEDON:{colIndex:13,setter:false,value:null,updatedable:false},
        UPDATEDON:{colIndex:14,setter:false,value:null,updatedable:false},
    },
    set:function(k,v)
    {
        if(this.properties.hasOwnProperty(k)){
            var p = this.properties[k];
            if(p.setter){
                p.setter(v);
            }else{
                if(p.updatedable){
                    this.properties[k].value = v;
                }
            }
        }
    },
    get:function(k){
        if(this.properties.hasOwnProperty(k)){
            var p = this.properties[k];
            return p.value;
        }
    },
    getNextId:function(){
        var r = this.lastRow();
        var rng = this.sheet.getRange(2,1,this.lastRow,1).getValues();
        var nextKey = Math.max.apply(null,rng);
        return nextKey;
    },
    save:function(){
                
    },
    update:function(){

    },
    remove:function(){
        
    },
    findMatchByCol: function(col,value){
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
    },
    loadById:function(v){
        var rec = this.findMatchByCol("ID",v);
        return rec;
    },
    loadByUpc:function(v){
        var rec = this.findMatchByCol("ID",v);
        return rec;
    },
    loadByRow:function(v){
        var s = this.loadDocSheet();
        var rec = s.getRange(v,1,1,this.lastCol()).getValues()[0];
        return rec;
    },
    loadAll:function(){
        var r = this.lastRow();
        var c = this.lastCol();
        this.records = this.sheet.getRange(2,1,r-1,c).getValues();
        return this.records;
    }
};