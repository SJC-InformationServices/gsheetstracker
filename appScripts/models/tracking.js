
function model_tracking(keyval) {

    model_base.call(this,"TRACKING");
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
    this.ID = null;
    this.UPC = null;
    this.TRACKED_UPC = null;
    this.DESCRIPTION = null;
    this.IN_SJC = null;
    this.IN_SJC_COUNT = null;
    this.OUT_SJC = null;
    this.OUT_SJC_COUNT = null;
    this.PHOTODONE = null;
    this.PHOTO_DONE_COUNT = null;
    this.RECORD_COMPLETE = null;
    this.LAST_USER = null;
    this.CREATEDON = null;
    this.UPDATEDON = null;
    
    for(var i in keyval){
        this[i] = keyval[i];
    }
    return this;
}
model_tracking.prototype = Object.create(model_base.prototype);
