function handleGet(e) {
    Logger.log('getRequest :' + JSON.stringify(e));
  try{
    
     var results = HtmlService.createHtmlOutputFromFile('index.html'); 
    
   
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
