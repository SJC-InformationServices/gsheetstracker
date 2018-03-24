

function doGet(e) 
{   
  //var lock = LockService.getPublicLock();
  //lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
  try{
    var archiveOutPut = new sjcarchive();
    archiveOutPut.parameters=e.parameter;
   return archiveOutPut.render();   
  }
  catch(e){
    // if error return this
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e.message}))
          .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    //lock.releaseLock();  
  }
    
}
