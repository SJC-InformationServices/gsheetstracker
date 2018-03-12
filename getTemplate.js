function renderTableTemplate(type)
{
    var attribs = getAttributes(type);
    var records = getRecords(type);

    var tbl = '<table id="trackingtable" class="display compact" width="98%" cellspacing="0"><thead><tr>';
    
      for (var i = 0; i<attribs.length;i++)
      { 
            tbl+= "<th>"+attribs[i]+"</th>";
      }
   tbl += "</tr></thead><tbody>";
    
    for (var i=0; i<records.length;i++)
    { 
      tbl += "<tr><td>";
        var row = records[i]; 
        tbl += row.join("</td><td>");          
      tbl += "</td></tr>";
    }
    tbl += "</tbody></table>";
    return HtmlService.createHtmlOutPutFromBlob(tbl).getContent();
}