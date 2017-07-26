function Mostrar()
{
   // Realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre 
   //cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.

   var largo;
   var ancho;
   var peralambre

   largo=parseInt(document.getElementById("alrgo").value);
   ancho=parseInt(document.getElementById("ancho").value);
   peralambre= (largo+ancho*2)*3

   alert("La cantidad de alambre a colocar es: "+peralambre);


}
