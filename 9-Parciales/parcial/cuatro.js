function Mostrar()
{
    //Realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
//primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.
  
  var uno;
  var dos;
  var resultado;

  uno=parseInt(prompt("Ingrese un número."));
  dos=parseInt(prompt("Ingrese un número."));

  if(uno == dos)
   {
       resultado= uno*dos
       document.write("El resultado es "+ resultado);
   }
    else if(uno > dos)
    {
        resultado= uno - dos
        document.write("El resultado es "+ resultado);
    }
    else
   {
    resultado= uno + dos
    document.write("El resultado es "+resultado);
   } 

}
