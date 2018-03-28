
function model_tracking(keyval) {

    model_base.call(this,"TRACKING");

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
