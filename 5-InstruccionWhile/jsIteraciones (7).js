function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='Si';
	var numero;

	while(respuesta=="Si")
	{
		contador++;
		numero=parseInt(prompt("Ingrese un nuúmero"));
	
      while(isNaN(numero))
	  {
		numero=parseInt(prompt("Ingrese un número"));
		respuesta=prompt("Ingrese Si para agregar más números");
	  }
	    acumulador=acumulador+numero;
        contador=contador+1;
    }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN