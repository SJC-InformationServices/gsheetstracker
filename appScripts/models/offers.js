function model_offers(){
    model_base.call(this,"OFFERS");
}
model_offers.prototype = Object.create(model_base.prototype);
if(typeof this.MODELS == "undefined"){
    this.MODELS={};
}
this.MODELS.OFFERS = model_offers;