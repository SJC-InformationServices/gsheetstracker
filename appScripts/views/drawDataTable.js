var thisObj = this;
function drawDataTable(type)
{
    this.type = type;
    this.sheetAdmin = new sjcSheetAdmin(type);
    var model = eval("model_"+type.toLowerCase())();

    this.getTableHead = function()
    {
      var attribs = this.sheetAdmin.sheetKeys();
      var tbl = '<table id="'+this.type+'TABLE" class="display compact" width="98%" cellspacing="0"><thead><tr>';
    
      for (var i = 0; i<attribs.length;i++)
      { 
        tbl+= "<th>"+attribs[i]+"</th>";
      }
        tbl += "</tr></thead><tbody></tbody></table>";
        return tbl;
    };

    this.tableContents = function()
    {
      
      return {
        type: this.type,
        rec: this.sheetAdmin.records(),
        coldef:JSON.parse(JSON.stringify(model.columnDefition)),
        attributes: JSON.parse(JSON.stringify(this.sheetAdmin.sheetKeys()))
      };
    };
  }
function getDataTableContents(type) 
{
  var ddt = new drawDataTable(type);
  return ddt.tableContents(type);
   
}

