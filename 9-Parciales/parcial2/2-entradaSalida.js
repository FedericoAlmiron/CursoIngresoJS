//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importefinal;

	importe=parseInt(prompt("Ingrese un importe."));
	importefinal=importe*1.21
	document.getElementById("importe").value="$"+importefinal+" IVA incluido.";
	alert("El importe final es $"+importefinal+". IVA incluido.");
	
}

