function model_images(){
    model_base.call(this,"IMAGES");
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
model_images.prototype = Object.create(model_base.prototype);