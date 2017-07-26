//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var uno;
	var dos;
	var resultado;
	uno=parseInt(prompt("Ingrese un número."));
	dos=parseInt(prompt("Ingrese un número."));
	if(uno == dos)
	{
		resultado=uno*dos
	}
	else
	 {
		 if(uno>dos)
		 {
			 resultado=uno-dos
		 }
		 else
		 {
			 resultado=uno+dos
		 }
	 }
	document.write("El resultado es "+resultado);
	
}

