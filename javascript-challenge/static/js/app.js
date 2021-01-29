// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;
console.log(data);
// YOUR CODE HERE! 

// Identify the table and tbody
var tbody = d3.select('#ufo-table>tbody');

//create function to generate and populate the table
function buildTable(tableData){
    //Dynamically build table
    tableData.forEach(record => {
        var row = tbody.append('tr');

        row.append('td').text(record['datetime'])
        row.append('td').text(record['city'])
        row.append('td').text(record['state'])
        row.append('td').text(record['country'])
        row.append('td').text(record['shape'])
        row.append('td').text(record['durationMinutes'])
        row.append('td').text(record['comments'])

    });
}

function filterTable(elem){
    var changedElem = d3.event.target;
    var filterDate = changedElem;

    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);
    console.log(filteredData);
    


    //Clear out the tbody
    tbody.html('');

    // Rebuild the filtered table using the buildTable function
    buildTable(filteredData);
}
//Call the function to initially load the table
buildTable(tableData);

// Add event listener to button
btn = d3.select('#filter-btn');
datetimefield = d3.select('#datetime')

btn.on('click', function test(b){
    alert('hey')
});

datetimefield.on('change', function filterDate(elem){

    var changeElem = d3.event.target;
    var filterDate = changeElem.value;

    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);

    console.log(filteredData);

    //Clear out the tbody
    tbody.html('');

    // Rebuild the filtered table using the buildTable function
    buildTable(filteredData);
});

