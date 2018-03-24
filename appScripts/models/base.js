
function model_base(type) 
{
    sjcSheetAdmin.call(this,type) ;
    this.toJson =function () {
        var obj = {};
        var k = this.sheetKeys;
        for (var i = 0; i < k.length; i++) {
            obj[k[i]] = this[k[i]];
        }
        return JSON.stringify(obj);
    }; 
    this.save = function(){};
    this.update = function(){};
    this.remove= function(){};
    
}
model_base.prototype = Object.create(sjcSheetAdmin.prototype);