function drawDataTable(type)
{
    this.sheetAdmin = new sjcSheetAdmin(type);
    this.getTableHead = function(){
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
      try{
    
      return {
        type: type,
        rec: JSON.parse(JSON.stringify(this.sheetAdmin.records())),
        attributes: JSON.parse(JSON.stringify(this.sheetAdmin.sheetKeys()))
      };
    } catch (e) {
      return {
        err: e.message,
        type: type,
        rec: JSON.parse(JSON.stringify([])),
        attributes: JSON.parse(JSON.stringify([]))
      };
    }
  };
}

function getDataTableContents(type) 
{
  var ddt = new drawDataTable(type);
  return ddt.tableContents();
   
}

