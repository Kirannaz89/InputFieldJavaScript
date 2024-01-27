function addRow(){
  var name = document.getElementById('name').value;
  var degree = document.getElementById('degree').value;
  var cgpa = document.getElementById('cgpa').value;
  
  if(name == ""){
    document.getElementById('invalidMsg').innerHTML = 'Please Fill in  Name';
    document.getElementById('name').focus();
    return;
  }
  else if (degree == ""){
    document.getElementById('invalidMsg').innerHTML = 'Please Fill in degree';
    document.getElementById('degree').focus();
    return;
  }
  else if (cgpa == ""){
    document.getElementById('invalidMsg').innerHTML = 'Please Fill in cgpa';
    document.getElementById('cgpa').focus();
    return;
  }
  
  else{
    document.getElementById('invalidMsg').innerHTML = "";
    let table = document.getElementById('mylist');
    // Insert a row at the end of the table
    let newRow = table.insertRow(-1);
    var l = table.rows.length-1;
    //Col 1 = name
    table.rows[l].insertCell(0);
    table.rows[l].cells[0].innerHTML = name;
    //Col 2 = degree
    table.rows[l].insertCell(1);
    table.rows[l].cells[1].innerHTML = degree;
    //col 3 = cgpa
    table.rows[l].insertCell(2);
    table.rows[l].cells[2].innerHTML = cgpa;
    //Col 3 = Delete Button
    table.rows[l].insertCell(3);
    table.rows[l].cells[3].innerHTML = "<button type='button' class='btnDelete' onclick='delRow(this);' id='btnDelete' size='1' height='1'>Delete</button>";

    //Clear input
    document.getElementById('name').value = "";
    document.getElementById('degree').value ="";
    document.getElementById('cgpa').value ="";

    document.getElementById('name').focus();
  }
  
}

function delRow(btn){
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}