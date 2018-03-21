function onTagDates(e)
{
  var sheet = e.source.getActiveSheet();
  if (sheet.getName() == "order data") //"order data" is the name of the sheet where you want to run this script.
  {
    var actRng = sheet.getActiveRange();
    var editColumn = actRng.getColumn();
    var rowIndex = actRng.getRowIndex();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    var dateCol = headers[0].indexOf("Date") + 1;
    var orderCol = headers[0].indexOf("Order") + 1;
    if (dateCol > 0 && rowIndex > 1 && editColumn == orderCol)
    {
      sheet.getRange(rowIndex, dateCol).setValue(Utilities.formatDate(new Date(), "UTC+8", "MM-dd-yyyy"));
    }
  }
}
function addAutoIncrement() {

  var AUTOINC_COLUMN = 0;
  var HEADER_ROW_COUNT = 1;
  
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var worksheet   = spreadsheet.getSheetByName("Sheet1");
  var rows        = worksheet.getDataRange().getNumRows();
  var vals        = worksheet.getSheetValues(1, 1, rows+1, 2);
  
  for (var row = HEADER_ROW_COUNT; row < vals.length; row++) {
    try {
      var id = vals[row][AUTOINC_COLUMN];
      Logger.log(id);Logger.log((""+id).length ===0);
      if ((""+id).length === 0) {
        // Here the columns & rows are 1-indexed
        worksheet.getRange(row+1, AUTOINC_COLUMN+1).setValue(row);
      }
    } catch(ex) {
      // Keep calm and carry on
    }
  }
}