var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
var productsTableId = SCRIPT_PROP.getProperty('PRODUCTS');
var offersTableId = SCRIPT_PROP.getProperty('OFFERS');
var trackingTableId = SCRIPT_PROP.getProperty('TRACKING');
var imagesTableId = SCRIPT_PROP.getProperty('IMAGES');
var keyFields = {
  "PRODUCTS":["UPC","GTIN"],
  "OFFERS":["UPC","GTIN"],
  "IMAGES":["UPC","image_path_photo"],
  "TRACKING":["UPC"],
};
var userProperties = PropertiesService.getUserProperties();


var lock = LockService.getPublicLock();
lock.waitLock(30000);  // wait 30 seconds before conceding defeat.

function doGet(e){
  return handleGet(e);
}

function doPost(e){
  return handlePost(e);
}

function setup() {
var docs = DriveApp.getFolderById('0BwcxSggYKA4DUnlaQzRrbDVmdHc').getFiles();

while (docs.hasNext()){
  var doc = docs.next();
  SCRIPT_PROP.setProperty(doc.getName(),doc.getId());
}
SCRIPT_PROP.setProperty('KEYFIELDS',keyFields);
}
