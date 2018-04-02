function model_base(type) 
{
    sjcSheetAdmin.call(this,type);
        
    this.recordSet=function () {
        var obj = {};
        var k = this.sheetKeys();
        for (var i = 0; i < k.length; i++) {
            obj[k[i]] = this[k[i]];
        }
        return obj;
    }; 
    this.build = function(keyval){
        for(var i in keyval)
        {
            this[i] = keyval[i];
        }
    };
    this.save = function(){
        //todo: validation Rules etc
        this.ID = this.insertRow(this.recordSet());
        return this.ID;
    };
    this.update = function(){
        //todo: check validation Rules 
        this.updateRow(this.record());
    };
    this.remove= function(){
        //todo: create history
        this.removeRow(this.record());
    };
    
}
model_base.prototype = Object.create(sjcSheetAdmin.prototype);
if(typeof this.MODELS == "undefined"){
    this.MODELS={};
}
this.MODELS.BASE = model_base;