


var xhttp= new XMLHttpRequest();

xhttp.onreadystatechange= function()

 {
  if (this.readyState==4&&this.status==200){

  

        var response= JSON.parse(this.responseText);
        
        var prod=response.product;
  

  }
    }

   $(document).ready(function(){
    $.getJSON("ajax.json", function (data){
    var employee_data='';
    $.each(data,function(key,value){
  employee_data += '<tr>';
  employee_data += '<td>' +value.Serial_no+ '</td>';
  employee_data += '<td>' +value.name+ '</td>';
  employee_data += '<td>' +value.Quantity+ '</td>';
  employee_data += '<td>' +value.unit+ '</td>';
  employee_data += '<td>' +value.department+ '</td>';
  employee_data += '<td>' +value.notes+ '</td>';
    }
    );
    $('#employee_table').append(employee_data);
});
   });

    xhttp.open("GET","ajax.json",true);
    xhttp.send();