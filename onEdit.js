function onEdit(e)
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