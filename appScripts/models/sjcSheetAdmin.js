function model_sjcSheetAdmin() {
    var _SJCSHEETADMIN = Object.create(null, {
        cache: {
            value: CacheService.getScriptCache(),
            writable: false,
        },
        type: {
            writable: true,
            value: null
        },
        sheetName: {
            writable: "Sheet",
            value: "Sheet1"
        },
        uniqueKey: {
            value: "UPC"
        },
        docKey: {
            get: function () {
                return PropertiesService.getScriptProperties().getProperty(this.type);
            }
        },
        doc: {
            get: function () {
                return SpreadsheetApp.openById(this.docKey);
            }
        },
        sheet: {
            get: function () {
                return this.doc.getSheetByName(this.sheetName);
            }
        },
        lastRow: {
            get: function () {
                return this.sheet.getLastRow();
            }
        },
        lastCol: {
            get: function () {
                return this.sheet.getLastColumn();
            }
        },
        sheetKeys: {
            get: function () {
                var cacheKey = this.type + "-sheetKeys";
                var cached = this.cache.get(cacheKey);
                if (cached != null) {
                    return cached;
                }
                var recs = this.sheet.getRange(1, 1, 1, this.lastCol).getValues()[0];
                this.cache.put(cacheKey, recs, 180);
                return recs;
            }
        },
        records: {
            value: function () {
                var cacheKey = this.type + "-records";
                var cached = this.cache.get(cacheKey);
                if (cached != null) {
                    return cached;
                }
                var recs = this.sheet.getRange(2, 1, this.lastRow - 1, 1).getValues();
                this.cache.put(cacheKey, recs, 180);
                return recs;
            }
        },
        nextId: {
            get: function () {
                var rng = this.sheet.getRange(2, 1, this.lastRow, 1).getValues();
                var nextKey = Math.max.apply(null, rng);
                return nextKey;
            }
        },
        searchByCol: {
            value: function (col, value) {
                var c = this.properties[col].colIndex;
                var r = this.lastRow();

                var rec = this.sheet.getRange(2, c + 1, this.lastRow - 1).getValues();
                var foundIndex = rec.findIndex(value);

                if (foundIndex != -1) {
                    var nextRow = this.sheet.getRange(foundIndex + 2, 1).getRowIndex();
                    return this.sheet.getRange(nextRow, 1, 1, this.lastCol()).getValues()[0];
                } else {
                    return false;
                }
            }
        },
        insertRow: {
            value: function (keyval) {
                if (this.uniqueKey == null) {
                    var uk = this.uniqueKey;
                    var isUnique = this.searchByCol(uk, keyval[uk]);
                    if (isUnique) {
                        return false;
                    }
                }
                var rowVals = [];
                var a = this.sheetKeys;
                keyval.ID = this.nextId;
                keyval.CREATEDON = new Date();
                keyval.UPDATEDON = new Date();
                for (var i = 0; i < a.length; i++) {
                    var attrib = a[i];
                    if (typeof keyval[attrib] != 'undefined') {
                        rowVals.push(keyval[attrib]);
                    } else {
                        rowVals.push("");
                    }
                }
                this.sheet.appendRow(rowVals);
                return keyval.ID;
            }
        },
        updateRow: {
            value: function (id, keyval) {
                var c_row = this.searchByCol("ID", id);

            }
        },
        removeRow: {
            value: function (id) {
                var c_row = this.searchByCol("ID", id);

            }
        },
        build: {
            value: function (obj) {
                for (var i in obj) {
                    this[i] = obj[i];
                }
                return this;
            }
        }

    });
    return _SJCSHEETADMIN;
}