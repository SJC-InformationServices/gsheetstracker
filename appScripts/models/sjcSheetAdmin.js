function sjcSheetAdmin(type) {

    this.cache = CacheService.getScriptCache();
    this.type = type;
    this.sheetName = "Sheet1";
    this.uniqueKey =  "UPC";
    this.docKey = PropertiesService.getScriptProperties().getProperty(this.type);
    this.doc = SpreadsheetApp.openById(this.docKey);
    this.sheet = this.doc.getSheetByName(this.sheetName);
    this.lastRow = function () {
        return this.sheet.getLastRow();
    };
    this.lastCol = function () {
        return this.sheet.getLastColumn();
    };
    this.sheetKeys = function () {
        var cacheKey = this.type + "-sheetKeys";
        var cached = this.cache.get(cacheKey);
        if (cached != null) {
            return cached;
        }
        var recs = this.sheet.getRange(1, 1, 1, this.lastCol()).getValues()[0];
        this.cache.put(cacheKey, recs, 180);
        return recs;
    };
    records = function () {
        var cacheKey = this.type + "-records";
        var cached = this.cache.get(cacheKey);
        if (cached != null) {
            return cached;
        }
        var recs = this.sheet.getRange(2, 1, this.lastRow() - 1, 1).getValues();
        this.cache.put(cacheKey, recs, 180);
        return recs;
    };
    this.nextId = function () {
        var rng = this.sheet.getRange(2, 1, this.lastRow(), 1).getValues();
        var nextKey = Math.max.apply(null, rng);
        return nextKey;
    };
    this.searchByCol = function (col, value) {
        var c = this.properties[col].colIndex;
        var r = this.lastRow();

        var rec = this.sheet.getRange(2, c + 1, this.lastRow() - 1).getValues();
        var foundIndex = rec.findIndex(value);

        if (foundIndex != -1) {
            var nextRow = this.sheet.getRange(foundIndex + 2, 1).getRowIndex();
            return this.sheet.getRange(nextRow, 1, 1, this.lastCol()()).getValues()[0];
        } else {
            return false;
        }
    };

    this.insertRow = function (keyval) {
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
    };
    this.updateRow = function (id, keyval) {
        var c_row = this.searchByCol("ID", id);
    };
    this.removeRow = function (id) {
        var c_row = this.searchByCol("ID", id);

    };
    this.build = function (obj) {
            for (var i in obj) {
                this[i] = obj[i];
            }
            return this;
        };

}