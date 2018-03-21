function doUnAuthorized(){
    var template = HtmlService.createTemplateFromFile('html/unAuthorized');
    var results = template.evaluate(); 
    
    results.setFaviconUrl("https://s3.amazonaws.com/sjcarchiveassets/lib/images/favicon.ico");
    results.setTitle('SJC McKesson Archive Manager');
    results.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    return results;   
}
function authorize(){
    var email = Session.getActiveUser().getEmail();
    if(email.indexOf("@stjoseph.com") !== -1)
    {
        //var appDriveFolderId = SCRIPT_PROP.getProperty('DRIVEFOLDERID');
        //var F = DriveApp.getFolderById(appDriveFolderId);
        //var permission = F.getAccess(Session.getActiveUser().getEmail());
        return true;
        /*if(permission == DriveApp.Permission.EDIT){
        return true;
        }else{
            return false;
        }*/
    }
    else {
        return false;
    }

}