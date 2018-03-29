if(typeof this.MODELS == "undefined"){
    this.MODELS={};
}
this.MODELS.PRODUCTS = model_products;
function model_products(){
    model_base.call(this,"PRODUCTS");
}
model_products.prototype = Object.create(model_base.prototype);