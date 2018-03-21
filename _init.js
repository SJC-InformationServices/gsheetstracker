

var lock = LockService.getPublicLock();
lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
var authorization =  authorize();

function doGet(e){
  if(typeof ARCHIVE =="undefined"){
    ARCHIVE={MODELS:{}};
}
  if( authorize()){
  return handleGet(e);
  }else{
  return doUnAuthorized(e);
  }
}

function doPost(e){
  if(typeof ARCHIVE =="undefined"){
    ARCHIVE={MODELS:{}};
}
  if( authorize()){
  return handlePost(e);
  }else{
    return doUnAuthorized(e);
  }
}

function setup() {
var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
var docs = DriveApp.getFolderById('0BwcxSggYKA4DUnlaQzRrbDVmdHc').getFiles();
SCRIPT_PROP.setProperty("DRIVEFOLDERID","0BwcxSggYKA4DUnlaQzRrbDVmdHc");

while (docs.hasNext()){
  var doc = docs.next();
  SCRIPT_PROP.setProperty(doc.getName(),doc.getId());
}
SCRIPT_PROP.setProperty('KEYFIELDS',keyFields);
}
