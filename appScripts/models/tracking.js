
function model_tracking(keyval) {

    model_base.call(this,"TRACKING");
    this.columnDefition = [              
        {"data":"ID","defaultContent": ""},
        {"data":"UPC","defaultContent": ""},
        {"data":"TRACKED_UPC","defaultContent": ""},
        {"data":"DESCRIPTION","defaultContent": ""},
        {"data":"IN_SJC","defaultContent": ""},
        {"data":"IN_SJC_COUNT","defaultContent": "","searchable": false},
        {"data":"OUT_SJC","defaultContent": "","visible":false,"searchable": false},
        {"data":"OUT_SJC_CONTENT","defaultContent": "","searchable": false},
        {"data":"PHOTODONE","defaultContent": "","visible":false,"searchable": false},
        {"data":"PHOTO_DONE_COUNT","defaultContent": "","searchable": false},
        {"data":"RECORD_COMPLETE","defaultContent": "","visible":false,"searchable": false},
        {"data":"LAST_USER","defaultContent": "","searchable": false},
        {"data":"CREATEDON","defaultContent": "","visible":false,"searchable": false},
        {"data":"UPDATEDON","defaultContent": "","searchable": false}
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
