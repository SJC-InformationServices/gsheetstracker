function model_offers(){
    model_base.call(this,"OFFERS");
    this.columnDefition = [              
        {"data":"ID","defaultContent": "","editable":false,"type":"int"},
        {"data":"UPC","defaultContent": "","type":"string"},
        {"data":"TRACKED_UPC","defaultContent": "","editable":false,"type":"string"},
        {"data":"DESCRIPTION","defaultContent": "","type":"string"},
        {"data":"IN_SJC","defaultContent": "","type":"datetime"},
        {"data":"IN_SJC_COUNT","defaultContent": "","editable":false},
        {"data":"OUT_SJC","defaultContent": "","editable":false,"type":"datetime"},
        {"data":"OUT_SJC_CONTENT","defaultContent": "","editable":false},
        {"data":"PHOTODONE","defaultContent": "","type":"datetime"},
        {"data":"PHOTO_DONE_COUNT","defaultContent": "","searchable": false},
        {"data":"RECORD_COMPLETE","defaultContent": "","type":"datetime"},
        {"data":"LAST_USER","defaultContent": "","searchable": false},
        {"data":"CREATEDON","defaultContent": "","editable":false,"type":"datetime"},
        {"data":"UPDATEDON","defaultContent": "","editable":false,"type":"datetime"}
      ];
}
model_offers.prototype = Object.create(model_base.prototype);
if(typeof this.MODELS == "undefined"){
    this.MODELS={};
}
this.MODELS.OFFERS = model_offers;