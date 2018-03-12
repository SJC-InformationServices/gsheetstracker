var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
var productsTableId = SCRIPT_PROP.getProperty('PRODUCTS');
var productsTableId = SCRIPT_PROP.getProperty('OFFERS');
var trackingTableId = SCRIPT_PROP.getProperty('TRACKING');
var trackingTableId = SCRIPT_PROP.getProperty('IMAGES');
var urls = ScriptApp.getService().getUrl().replace("https://script.google.com/a/stjoseph.com/macros/s/AKfycbx-uK4T9fjkJHiAgqouwqSnUXW1UVGW1XRyq9nO6RcGjNOlpomO/exec/","").split("/");
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
  SCRIPT_PROP.setProperty(doc.getId(),doc.getName());
}

}
