document.getElementById("submit").onclick=function()
{

    var table = document.createElement('table');
    table.setAttribute('name', 'number', 'email');
    var arrValue = new Array();

    var names = getElementById("name").value;
    var numbers = getElementById("number").value;
    var emails = getElementById("email").value;

    arrValue.push(['names','numbers','emails']);
    var tr = table.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');              // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
    for (var c = 0; c <= arrValue.length - 1; c++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < arrHead.length; j++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(-1);
            td.innerHTML = arrValue[c][j];                  // ADD VALUES TO EACH CELL.
        }
    }
}