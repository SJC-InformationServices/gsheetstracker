
function model_base(){
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
        },
        update:{
            value:function(){}
        },
        remove:{
            value:function(){}
        }
    });
    return _BASE;
}