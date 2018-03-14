var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
var productsTableId = SCRIPT_PROP.getProperty('PRODUCTS');
var offersTableId = SCRIPT_PROP.getProperty('OFFERS');
var trackingTableId = SCRIPT_PROP.getProperty('TRACKING');
var imagesTableId = SCRIPT_PROP.getProperty('IMAGES');
var appDriveFolderId = SCRIPT_PROP.getProperty('DRIVEFOLDERID');
var keyFields = {
  "PRODUCTS":["UPC","GTIN"],
  "OFFERS":["UPC","GTIN"],
  "IMAGES":["UPC","image_path_photo"],
  "TRACKING":["UPC"],
};

var userProperties = PropertiesService.getUserProperties();


var lock = LockService.getPublicLock();
lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
var authorization =  authorize();
function doGet(e){
  if( authorize()){
  return handleGet(e);
  }else{
  return doUnAuthorized(e);
  }
}

function doPost(e){
  if( authorize()){
  return handlePost(e);
  }else{
    return doUnAuthorized(e);
  }
}

function setup() {
var docs = DriveApp.getFolderById('0BwcxSggYKA4DUnlaQzRrbDVmdHc').getFiles();
SCRIPT_PROP.setProperty("DRIVEFOLDERID","0BwcxSggYKA4DUnlaQzRrbDVmdHc");

while (docs.hasNext()){
  var doc = docs.next();
  SCRIPT_PROP.setProperty(doc.getName(),doc.getId());
}
SCRIPT_PROP.setProperty('KEYFIELDS',keyFields);
}
