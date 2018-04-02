function model_tracking(keyval) 
{
    //inti prototype
    model_base.call(this, "TRACKING");
    //Properties
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

    for (var i in keyval) {
        this[i] = keyval[i];
    }

    this.tableId = "#TRACKINGTABLE";
    this.dataTable = {
        dom: "<'row'<'col-sm-3'B><'col-md-5'p><'col-sm-3'l>><'row'<'col-md-6'i><'col-md-4'f>><'row'<'col-md-12't>>",
        data: this.records(),
        paging: true,
        processing: true,
        autowidth: true,
        deferRender: true,
        keys: true,
        select: {
            style: 'single',
            items: 'row',
            blurable: false
        },
        idSrc: "ID",
        buttons: [
            "excel",
            {
                extend: 'edit',
            },
            {
                extend: 'remove'
            }
        ],
        columns: [{
                "data": "ID",
                "defaultContent": ""
            },
            {
                "data": "UPC",
                "defaultContent": ""
            },
            {
                "data": "TRACKED_UPC",
                "defaultContent": ""
            },
            {
                "data": "DESCRIPTION",
                "defaultContent": ""
            },
            {
                "data": "IN_SJC",
                "defaultContent": ""
            },
            {
                "data": "IN_SJC_COUNT",
                "defaultContent": ""
            },
            {
                "data": "OUT_SJC",
                "defaultContent": ""
            },
            {
                "data": "OUT_SJC_CONTENT",
                "defaultContent": ""
            },
            {
                "data": "PHOTODONE",
                "defaultContent": ""
            },
            {
                "data": "PHOTO_DONE_COUNT",
                "defaultContent": ""
            },
            {
                "data": "RECORD_COMPLETE",
                "defaultContent": ""
            },
            {
                "data": "LAST_USER",
                "defaultContent": "",
            },
            {
                "data": "CREATEDON",
                "defaultContent": ""
            },
            {
                "data": "UPDATEDON",
                "defaultContent": ""
            }
        ]
    };
    this.editor = {
        idSrc: "ID",
        table: this.tableId,
        fields: [{
                "name": "UPC",
                "label": "UPC"
            },
            {
                "name": "TRACKED_UPC",
                "label": "TRACKED_UPC"
            },
            {
                "name": "DESCRIPTION",
                "label": "Description"
            },
            {
                "name": "IN_SJC",
                type: 'datetime',
                "label": "In_SJC"
            },
            {
                "name": "OUT_SJC",
                type: 'datetime',
                "label": "Out_SJC"
            },
            {
                "name": "PHOTODONE",
                type: 'datetime',
                "label": "Photo Done"
            },
            {
                "name": "RECORD_COMPLETE",
                type: 'datetime',
                "label": "Complete"
            },
        ]
    };    
    return this;
}
model_tracking.prototype = Object.create(model_base.prototype);
if (typeof this.MODELS == "undefined") {
    this.MODELS = {};
}
this.MODELS.TRACKING = model_tracking;