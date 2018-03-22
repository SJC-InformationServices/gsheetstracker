
SJCARCHIVE.MODELS.TRACKING = Object.create(SJCARCHIVE.MODELS.BASE,{
    type:{value:"TRACKING"},
    
    
    properties:{
        ID:{colIndex:1,setter:this.loadById,value:null,editable:false},
        UPC:{colIndex:2,setter:this.loadByUpc,value:null,required:true,editable:true},
        TRACKED_UPC:{colIndex:3,setter:false,value:null,editable:true},
        DESCRIPTION:{colIndex:4,setter:false,value:null,editable:true},
        IN_SJC:{colIndex:5,setter:false,value:null,editable:true},
        IN_SJC_COUNT:{colIndex:6,setter:false,value:null,editable:true},
        OUT_SJC:{colIndex:7,setter:false,value:null,editable:true},
        OUT_SJC_COUNT:{colIndex:8,setter:false,value:null,editable:true},
        PHOTODONE:{colIndex:9,setter:false,value:null,editable:true},
        PHOTO_DONE_COUNT:{colIndex:10,setter:false,value:null,editable:true},
        RECORD_COMPLETE:{colIndex:11,setter:false,value:null,editable:true},
        LAST_USER:{colIndex:12,setter:false,value:null,editable:true},
        CREATEDON:{colIndex:13,setter:false,value:null,editable:false},
        UPDATEDON:{colIndex:14,setter:false,value:null,editable:false},
    },
  
   
    save:function(){
                
    },
    update:function(){

    },
    remove:function(){
        
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
});