
function model_base(type) 
{
    sjcSheetAdmin.call(this,type) ;
    this.recordSet=function () {
        var obj = {};
        var k = this.sheetKeys();
        for (var i = 0; i < k.length; i++) {
            obj[k[i]] = this[k[i]];
        }
        return obj;
    }; 
    this.save = function(){
        //todo: validation Rules etc
        return this.insertRow(this.record());
    };
    this.update = function(){
        this.updateRow(this.record());
    };
    this.remove= function(){
        this.removeRow(this.record());
    };
    
}
model_base.prototype = Object.create(sjcSheetAdmin.prototype);