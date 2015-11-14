/* 
Taner Albayrak
Taner_Albayrak@student.uml.edu
Assignment 6
 */

var showTable = function() {
    //get all form data into variables
    var rStart = $("#rowStart").val();
    var rEnd = $("#rowEnd").val();
    var cStart = $("#colStart").val();
    var cEnd = $("#colEnd").val();
    var ans ;
    
    var numRows = rEnd - rStart ;
    var numCols = cEnd - cStart ;
    
    
    /*if ( isNaN(rStart) || isNaN(rEnd) || isNaN(cStart) || isNaN(cEnd)) {
        document.write("Error: Please enter only numbers.");
        return false ;
    }
    )*/ //doesn't work
    
    //the actual table string to be inserted into HTML
    var tableData = "<table class='tab'>" ;
    tableData += "<thead><tr><th></th>";
    
    //creates the first row in the table with data
    for ( var i = 1; i <= numRows + 1; i++ ) {
        ans = parseInt(rStart) + (i - 1) ;
        tableData += "<th>" + ans + "</th>" ;
    }
    
    tableData += "</tr></thead><tbody>" ;
    
        for ( var i = 0; i <= numCols; i++ ) {
            tableData += "<tr>" ;
            ans = parseInt(cStart) + i ;
            tableData += "<td>" + ans + "</td>" ;
            
            //Does the multiplication of corresponding values, then put into table
            for ( var j = 1; j <= numRows + 1; j++ ) {
                ans = parseInt(rStart) + (j - 1) ;
                ans *= (parseInt(cStart) + i) ;
                tableData += "<td>" + ans + "</td>" ;
            }
            tableData += "</tr>" ;
        }
        tableData += "</tbody></table>" ;
        
        document.getElementById("multTable").innerHTML = tableData ; // place the table in the HTML
};
