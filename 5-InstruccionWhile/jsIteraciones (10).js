function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var numero;
	var respuesta=true;
	var acumuladorneg=0
	var acumuladorpos=0
	var contadorneg=0
	var contadorpos=0
	var contadorcero=0
	var contadorpares=0
	var promediopositivo=0;
	var promedionegativo=0;
	var diferencia;

    while(respuesta==true)
	{  
	  numero=parseInt(prompt("Ingrese un número"));
	//No se pide pero para validar numeros usar isNaN
	  if(numero<0) //suma negativos
	  {
		  acumuladorneg+=numero;
		  contadorneg++;
	  }
	   else if(numero>0) //suma positivos
       {
		   acumuladorpos+=numero;
		   contadorpos++;
	   }
	     else //cantidad de ceros
		 {
			contadorcero++;
		 }
	  if(numero%2==0)
	  {
		  contadorpares++;
	  }	

	 respuesta=confirm("Confirme para seguir ingresando números.");	
    }
	//Calculos fuera de while
	promediopositivo=acumuladorpos/contadorpos;
	
	if(contadorneg>0)
	{
	  promedionegativo=acumuladorneg/contadorneg;
	}
	 else
	 {
		 promedionegativo=("No hay números negativos.");
	 }
	//Diferencia positivos
    diferencia=contadorneg-contadorpos;
	if(diferencia<0) //Utilizamos el IF para cambiar el signo, siempre entran números negativos y por la multiplicación se transforman en positivos.
	{
		diferencia=diferencia*-1;
	}
	
	document.write("La suma de los números negativos es: "+acumuladorneg+"<br>");
	document.write("La suma de los números positivos es: "+acumuladorpos+"<br>");
	document.write("La cantidad de números positivos es: "+contadorpos+"<br>");
    document.write("La cantidad de números negativos es: "+contadorneg+"<br>");
	document.write("La cantidad de ceros es: "+contadorcero+"<br>");
	document.write("La cantidad de números pares es: "+contadorpares+"<br>");
	document.write("El promedio de números positivos es: "+promediopositivo+"<br>");
	document.write("El promedio de números negativos es: "+promedionegativo+"<br>");
	document.write("La diferencia entre números positivos y negativos es: "+diferencia+"</br>");
	

}//FIN DE LA FUNCIÓN