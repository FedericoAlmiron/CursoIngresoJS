function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo;
	var minimo;
	var numero;
	var primera=true;

    while(respuesta.toLowerCase()=="si")
	{  
	  numero=prompt("Ingrese un número");
	  if(primera)
	  {
		  maximo=numero;
		  minimo=numero;
		  primera=false;
	  }
	   else if(numero<minimo)
	   {
        minimo=numero
	   }
	    else if(numero>maximo)
	    {
         maximo=numero
	    }
	 respuesta=prompt("Ingrese Si para agregar más números");	
	
    }
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;



}//FIN DE LA FUNCIÓN