function handleGet(e) {
    Logger.log('getRequest :' + JSON.stringify(e));
    
    var parms = e.parameter;

  try{
    
    switch(parms['request'])
    {
      case "PRODUCTS":

      var records = {'PRODUCTS': TRUE };
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);
      
      break;
      case 'OFFERS':

      var records = {'PRODUCTS': TRUE };
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);

      break;
      case 'TRACKING':

      var records = {'PRODUCTS': TRUE };
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);

      break;
      case 'IMAGES':

      var records = {'PRODUCTS': TRUE };
      var results = ContentService.createTextOutput(JSON.stringify(records)).setMimeType(ContentService.MimeType.JSON);

      break;
      default:
      var results = HtmlService.createHtmlOutputFromFile('index.html'); 
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
