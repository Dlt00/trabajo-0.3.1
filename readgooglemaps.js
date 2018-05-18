function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'google_maps.json', true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var responseText = xobj.responseText;
            // Parse JSON string into object
            var actual_JSON = JSON.parse(responseText);
            callback(actual_JSON);
        }
    };
    xobj.send(null);  
}

function viewJSON() {
    loadJSON(function(response) {
        /* Aqui l'objecte response representa l'objecte JSON que ens 
           ha retornat el servidor */
		   /*creamos la variable*/
		   var tabla_de_valores = "";
			/*le sumamos valores ha dicha variable*/
		   tabla_de_valores += '<table class="table table-striped">';
		   /*bucle para sacar resultados Json*/
		   for (var z = 0; z<response.results.length; z++){
			/*le sumamos los valores sacados del json en forma de tabla*/
			tabla_de_valores += "<tr>";
			tabla_de_valores += '<td><img src='+ response.results[z].icon +'></td>'
			tabla_de_valores += "<td>" + response.results[z].name +"</td>";
			tabla_de_valores += "<td>" + response.results[z].geometry.location.lat +"</td>";
			tabla_de_valores += "<td>" + response.results[z].geometry.location.lng +"</td>";
			tabla_de_valores += "<td>" + response.results[z].vicinity +"</td>";
			tabla_de_valores += "<td>" + response.results[z].types +"</td>";	
			tabla_de_valores += "</tr>";
		   }
		   tabla_de_valores += "</table>"
		   /* seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado*/
		   document.getElementById("results").innerHTML = tabla_de_valores;
   });
   
   
}
