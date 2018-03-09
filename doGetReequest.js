function handleGet(e) {
      
  try{
   return HtmlService.createHtmlOutputFromFile('index.html'); 
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
