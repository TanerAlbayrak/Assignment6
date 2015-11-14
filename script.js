/* 
Taner Albayrak
Taner_Albayrak@student.uml.edu
Assignment 6
 */

var showTable = function() {
    
    var rStart = $("#rowStart").val();
    var rEnd = $("#rowEnd").val();
    var cStart = $("#colStart").val();
    var cEnd = $("#colEnd").val();
    var ans ;
    
    var numRows = rEnd - rStart ;
    var numCols = cEnd - cStart ;
    
    var tableData = "<table class='tab'>" ;
    tableData += "<thead><tr><th></th>";
    
    for ( var i = 1; i <= numRows + 1; i++ ) {
        ans = parseInt(rStart) + (i - 1) ;
        tableData += "<th>" + ans + "</th>" ;
    }
    
    tableData += "</tr></thead><tbody>" ;
    
        for ( var i = 0; i <= numCols; i++ ) {
            tableData += "<tr>" ;
            ans = parseInt(cStart) + i ;
            tableData += "<td>" + ans + "</td>" ;
            
            for ( var j = 1; j <= numRows + 1; j++ ) {
                ans = parseInt(rStart) + (j - 1) ;
                ans *= (parseInt(cStart) + i) ;
                tableData += "<td>" + ans + "</td>" ;
            }
            tableData += "</tr>" ;
        }
        tableData += "</tbody></table>" ;
        
        document.getElementById("multTable").innerHTML = tableData ;
};
