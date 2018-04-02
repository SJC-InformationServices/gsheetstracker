var thisObj = this;
function drawDataTable(type)
{
    this.type = type;
    this.sheetAdmin = new sjcSheetAdmin(type);
    var modelfunc = eval("model_"+type.toLowerCase());
    var model = new modelfunc();

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
      try{
      return {
        tableid:model.tableId,
        datatable:model.dataTable,
        editor:model.editor
      };
    }catch(E){
      return {tableid:model.tableId,datatable:{},editor:{},error:e.message};
    }
    };
  }
function getDataTableContents(type) 
{
  var ddt = new drawDataTable(type);
  return ddt.tableContents(type);
   
}
function insertRecord(obj) {

    
    var modelfunc = eval("model_"+obj.type.toLowerCase());
    var model = new modelfunc();
    model.build(obj.rec);
    var id = model.save();
    obj.rec.id = id;
    return obj;
}

function updateRecord(obj) 
{
  if(obj.ID > 0)
  {

  }
  return false;
}
function deleteRecord(obj)
{
  if(obj.ID > 0)
  {

  }
  return false;
}
