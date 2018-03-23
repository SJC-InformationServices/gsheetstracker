
_BASE = Object.create(model_sjcSheetAdmin(), {
    toJson:{
        get:function(){
            var obj = {};
            var k = this.sheetKeys;
            for(var i = 0; i<k.length;i++){
                obj[k[i]] = this[k[i]];
            }
            return JSON.stringify(obj);
        }
    },
    save:{
        value:function(){

        }
    }
});
function model_base(){
    return _BASE;
}