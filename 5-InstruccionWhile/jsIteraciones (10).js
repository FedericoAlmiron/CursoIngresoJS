function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta='si';
	var maximo;
	var minimo;
	var numero;
	var primera=true;
	var acumuladorneg;
	var acumuladorpos;

    while(respuesta.toLowerCase()=="si")
	{  
	  numero=parseInt(prompt("Ingrese un número"));
	  if(numero<0)
	  {
		  acumuladorneg+=numero;
		  contador++;
	  }
	   else
       {
		   acumuladorpos+=numero;
	   }

	 respuesta=prompt("Ingrese Si para agregar más números");	
	
    }
	



}//FIN DE LA FUNCIÓN