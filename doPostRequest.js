function handlePost(e) {

    try{
    Logger.log('getRequest :' + JSON.stringify(e));
    
    var parms = e.parameter;

 
      var results = ContentService.createTextOutput(JSON.stringify(e)).setMimeType(ContentService.MimeType.JSON);
      
     
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
