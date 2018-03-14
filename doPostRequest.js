function handlePost(e) {

  if(typeof e !== 'undefined')
  return ContentService.createTextOutput(JSON.stringify(e.postData.contents));
    
}
