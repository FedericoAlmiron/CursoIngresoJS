function Mostrar()
{
    var numero;
    var respuesta=true;
    var contadorpares=0;
    var promedio=0;
    var nummaximo;
    var numminimo;
    var acumulador=0;

 while(respuesta==true)
 {
   numero=parseInt(prompt("Ingrese un número."));

   if(numero%2==0) //numerospares
   {
       contadorpares++;
       acumulador++;
   }

   respuesta=confirm("Confirme para seguir ingresando números.");	
 }
 
 promedio=acumulador



}
