function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='Si';
	var numero;

    while(respuesta=="Si")
	{
		numero=parseInt(prompt("Ingrese un número"));
    
	 while(isNaN(numero))
	  {
		numero=parseInt(prompt("Ingrese un número"));
	  }
	    if(numero>=0)
		{
			positivo+=numero;
		}
		 else
		 {
			 negativo*=numero;
		 }
	 respuesta=prompt("Ingrese Si para agregar más números");	 
	 
    }
	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN