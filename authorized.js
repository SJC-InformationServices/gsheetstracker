function authorize(){
    var email = Session.getActiveUser().getEmail();
    if(email.indexOf("@stjoseph.com") !== -1)
    {
        var appDriveFolderId = SCRIPT_PROP.getProperty('DRIVEFOLDERID');
        var F = DriveApp.getFolderById(appDriveFolderId);
        var permission = F.getAccess(Session.getActiveUser().getEmail());
        return true;
        if(permission == DriveApp.Permission.EDIT){
        return true;
        }else{
            return false;
        }
    }
    else {
        return false;
    }

}