var model_tracking = {
    type:"TRACKING",
    properties:{
        ID:{setter:this.loadById,value:null,updatedable:false},
        UPC:{setter:this.loadByUpc,value:null,required:true,updatedable:true},
        TRACKED_UPC:{setter:false,value:null,updatedable:true},
        DESCRIPTION:{setter:false,value:null,updatedable:true},
        IN_SJC:{setter:false,value:null,updatedable:true},
        IN_SJC_COUNT:{setter:false,value:null,updatedable:true},
        OUT_SJC:{setter:false,value:null,updatedable:true},
        OUT_SJC_COUNT:{setter:false,value:null,updatedable:true},
        PHOTODONE:{setter:false,value:null,updatedable:true},
        PHOTO_DONE_COUNT:{setter:false,value:null,updatedable:true},
        RECORD_COMPLETE:{setter:false,value:null,updatedable:true},
        LAST_USER:{setter:false,value:null,updatedable:true},
        CREATEDON:{setter:false,value:null,updatedable:false},
        UPDATEDON:{setter:false,value:null,updatedable:false},
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
    save:function(){
        this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(this.type));
        this.sheet = this.doc.getSheetByName("Sheet1");
        this.lastCol = this.sheet.getLastColumn();
        this.lastRow = this.sheet.getLastRow();
    },
    delete:function(){
        this.doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(this.type));
        this.sheet = this.doc.getSheetByName("Sheet1");
        this.lastCol = this.sheet.getLastColumn();
        this.lastRow = this.sheet.getLastRow();
    },
};