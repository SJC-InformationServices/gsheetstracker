function drawDataTable(type)
{
    sjcSheetAdmin.call(this,type);

    this.getTableHead = function(){
      var attribs = this.sheetKeys();
      var tbl = '<table id="'+this.type+'TABLE" class="display compact" width="98%" cellspacing="0"><thead><tr>';
    
      for (var i = 0; i<attribs.length;i++)
      { 
        tbl+= "<th>"+attribs[i]+"</th>";
      }
        tbl += "</tr></thead><tbody></tbody></table>";
        return tbl;
    };
    this.tableContents = function(){
      try{
    
      return {
        type: type,
        rec: JSON.parse(JSON.stringify(this.records())),
        attributes: JSON.parse(JSON.stringify(this.sheetKeys()))
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
drawDataTable.prototype = Object.create(sjcSheetAdmin.prototype);

function getDataTableContents(type) 
{
  
  return new drawDataTable(type).tableContents();
   
}

