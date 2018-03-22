

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
