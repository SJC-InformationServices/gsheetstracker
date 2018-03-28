function sjcarchive() {
  this.parameters= {};
  this.MODELS = 
    {
        TRACKING: new model_tracking(),
        OFFERS: new model_offers(),
        PRODUCTS: new model_products(),
        IMAGES:  new model_images()
    };
    this.authorize = function () {
        var email = Session.getActiveUser().getEmail();
        if (email.indexOf("@stjoseph.com") !== -1) {
          return true;
        } else {
          return false;
        }};
    this.perms = function () {
        //TODO: dbl check permissions on gsheets
        return true;
    };
    this.unAuthorizedTemplate= 'html/unAuthorized';
    this.AuthorizedTemplate='html/index.html';
    this.template = function () {
        if (this.authorize) {
          return this.AuthorizedTemplate;
        } else {
          return this.unAuthorizedTemplate;
        }
      };
    this.render=function ()
    {
        switch(this.parameters.request)
        {
        case 'api':
        var results = ContentService
        .createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
        break;
        case default:
        var template = HtmlService.createTemplateFromFile(this.template());
        results = template.evaluate();
        results.setFaviconUrl("https://s3.amazonaws.com/sjcarchiveassets/lib/images/favicon.ico");
        results.setTitle('SJC McKesson Archive Manager');
        results.addMetaTag('viewport', 'width=device-width, initial-scale=1');
        
        break;
      }
      return results;
    };  
}



function insertRecord(obj) {
  try {
    var archiveOutPut = new sjcarchive();
    var model = archiveOutPut.MODELS[obj.type];
    model.build(obj);
    var rec = model.save();
    return JSON.stringify([model.record(),rec]);
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
function deleteRecord(type,keyval,row){
  
}