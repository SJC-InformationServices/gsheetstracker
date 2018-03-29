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
      var results;
        switch(this.parameters.request)
        {
        case 'api':
        try{
        var sheets = new sjcSheetAdmin(this.parameters.type);
        results = ContentService
        .createTextOutput(JSON.stringify(sheets.records()))
        .setMimeType(ContentService.MimeType.JSON);
        }catch(e){
          results = ContentService
          .createTextOutput(JSON.stringify([]))
          .setMimeType(ContentService.MimeType.JSON);  
        }
        break;
        default:
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
