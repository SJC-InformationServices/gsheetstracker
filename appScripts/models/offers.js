function model_offers(){
    model_base.call(this,"OFFERS");
    this.tableId = "#OFFERSTABLE";
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
                extend: 'create',
                editor: editor
            },
            {
                extend: 'edit',
                editor: editor
            },
            {
                extend: 'remove',
                editor: editor
            }
        ],
        columns : [{
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
                "label": "In_SJC"
            },
            {
                "name": "OUT_SJC",
                "label": "Out_SJC"
            },
            {
                "name": "PHOTODONE",
                "label": "Photo Done"
            },
            {
                "name": "RECORD_COMPLETE",
                "label": "Complete"
            },
        ]
    };
}
model_offers.prototype = Object.create(model_base.prototype);
if(typeof this.MODELS == "undefined"){
    this.MODELS={};
}
this.MODELS.OFFERS = model_offers;