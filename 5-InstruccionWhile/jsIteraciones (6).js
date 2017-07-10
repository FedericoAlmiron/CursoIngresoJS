function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero"));
	
	} 
	  while(isNaN(numero))
	  {
		numero=parseInt(prompt("Ingrese un numero"));
	  }
    acumulador=acumulador+numero;
    contador=contador+1; 


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN