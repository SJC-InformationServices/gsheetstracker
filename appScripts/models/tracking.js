

function model_tracking(){
    var _TRACKING = Object.create(model_base(), {
        ID: {
            value: null,
            writable: true
        },
        UPC: {
            value: null,
            enumerable: false
        },
        TRACKED_UPC: {
            value: null,
            writable: true
        },
        DESCRIPTION: {
            value: null,
            writable: true
        },
        IN_SJC: {
            value: null,
            writable: true
        },
        IN_SJC_COUNT: {
            value: null,
            writable: true
        },
        OUT_SJC: {
            value: null,
            writable: true
        },
        OUT_SJC_COUNT: {
            value: null,
            writable: true
        },
        PHOTODONE: {
            value: null,
            writable: true
        },
        PHOTO_DONE_COUNT: {
            value: null,
            writable: true
        },
        RECORD_COMPLETE: {
            value: null,
            writable: true
        },
        LAST_USER: {
            value: null,
            writable: true
        },
        CREATEDON: {
            value: null,
            writable: true
        },
        UPDATEDON: {
            value: null,
            writable: true
        }
    });
    return _TRACKING;
}