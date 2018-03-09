var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
var productsTableId = "1I-CL4wliLPb_s6L8KTSTPbvaoGeGMQI-Pfo07aLlLts";
var trackingTableId = "1SLl6FRFH90rcC36bkyxnjudfnUIwRIUIiX1mH-LljGQ";

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
