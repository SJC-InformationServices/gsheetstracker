function handleGet(e) {
       
    var parms = e.parameter;

  try{
    var records;
    var results;
    if(parms.request != "")
    {
      var et = new entity(parms.request);
      return results = ContentService.createTextOutput(JSON.stringify(et.records)).setMimeType(ContentService.MimeType.JSON);
    }else{

      var template = HtmlService.createTemplateFromFile('index.html');
      results = template.evaluate(); 
      
      results.setFaviconUrl("https://s3.amazonaws.com/sjcarchiveassets/lib/images/favicon.ico");
      results.setTitle('SJC McKesson Archive Manager');
      results.addMetaTag('viewport', 'width=device-width, initial-scale=1');     
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
