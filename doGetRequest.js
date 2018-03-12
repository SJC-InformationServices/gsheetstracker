function handleGet(e) {
    Logger.log('getRequest :' + JSON.stringify(e));
    
    var parms = e.parameter;

  try{
    
    switch(parms['request'])
    {
      case "PRODUCTS":

      var records = getProducts();
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);
      
      break;
      case 'OFFERS':

      var records = getOffers();
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);

      break;
      case 'TRACKING':

      var records = getTracking();
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);

      break;
      case 'IMAGES':

      var records = getImages();
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);

      break;
      default:
      var template = HtmlService.createTemplateFromFile('index.html');
      var results = template.evaluate(); 
      results.setFaviconUrl("https://s3.amazonaws.com/sjcarchiveassets/lib/images/favicon.ico");
      results.setTitle('SJC McKesson Archive Manager');
      break;
    }   
   return results;
  }
  catch(e){
    // if error return this
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();  
  }
    
}
