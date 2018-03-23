function modules_sjcarchive() {
  var sjcArchiveOutput = Object.create(null, {
    parameters: {
      value: {},
    },
    MODELS: {
      value: {
        TRACKING: new model_tracking(),
        OFFERS: new model_offers(),
        PRODUCTS: new model_products(),
        IMAGES: new model_images()
      }
    },
    authorize: {
      get: function () {
        var email = Session.getActiveUser().getEmail();
        if (email.indexOf("@stjoseph.com") !== -1) {
          return true;
        } else {
          return false;
        }
      }
    },
    perms: {
      get: function () {
        //TODO: dbl check permissions on gsheets
        return true;
      }
    },
    unAuthorizedTemplate: {
      value: 'html/unAuthorized'
    },
    AuthorizedTemplate: {
      value: 'html/index.html'
    },
    template: {
      get: function () {
        if (this.authorize) {
          return this.AuthorizedTemplate;
        } else {
          return this.unAuthorizedTemplate;
        }
      }
    },
    render: {
      value: function () {
        var template = HtmlService.createTemplateFromFile(this.template);
        results = template.evaluate();
        results.setFaviconUrl("https://s3.amazonaws.com/sjcarchiveassets/lib/images/favicon.ico");
        results.setTitle('SJC McKesson Archive Manager');
        results.addMetaTag('viewport', 'width=device-width, initial-scale=1');
        return results;
      }
    },
    createModel: {
      value: function (type, keyval) {
        var model = Object.create(this.MODELS[type], keyval);
        return model;
      }
    }
  });
  return sjcArchiveOutput;
}

function getDataTableAttributes(type) {
  try {
    var et = new entity(type);
    return {
      type: type,
      rec: JSON.parse(JSON.stringify(et.records)),
      attributes: JSON.parse(JSON.stringify(et.attributes))
    };
  } catch (e) {
    return {
      err: e,
      type: type,
      rec: JSON.parse(JSON.stringify([])),
      attributes: JSON.parse(JSON.stringify([]))
    };
  }
}

function insertRecord(obj) {
  try {
    var archiveOutPut = new modules_sjcarchive();
    var model = archiveOutPut.createModel(obj.type);
    model.build();
    return JSON.stringify(model);
    //continue here
  } catch (e) {
    return JSON.stringify(["error", e.message, obj, this.sjcArchiveOutput]);
  }
}

function updateRecord(type, keyval, row) {
  return [type, keyval];
  /*try{
      var prop = PropertiesService.getScriptProperties().getProperty(type);
      if(prop)
      {
          var doc = SpreadsheetApp.openById(prop);
          var sheet = doc.getSheetByName("Sheet1");
          var lastRow = sheet.getLastRow(),lastCol=sheet.getLastColumn();
              
          var cols = sheet.getRange(2,1,lastRow-1,lastCol);
          var values = cols.getValues();
          return values;
      }else{
          return false;
      }}
      catch(e){
          return false;
      }*/
}
