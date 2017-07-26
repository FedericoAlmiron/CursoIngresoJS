//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var uno;
	var dos;
	var alambre;
	uno=parseInt(document.getElementById("ancho").value);
	dos=parseInt(document.getElementById("largo").value);
	alambre=(uno+dos*2)*6

	alert("La cantidad de metros de alambre a colocar es :"+alambre);
	
}

