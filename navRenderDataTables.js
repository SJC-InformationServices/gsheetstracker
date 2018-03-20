function renderDataTable(type)
{
    var et = new entity(type);
    return ContentService
          .createTextOutput(JSON.stringify({tbl:type,records:et.records}))
          .setMimeType(ContentService.MimeType.JSON);
}