function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

if(mesDelAño== "Febrero")
{
    alert("Este mes tiene 28 días");
}
else
 {
     if(mesDelAño=="Abril"||mesDelAño=="Junio"||mesDelAño=="Septiembre"||mesDelAño=="Noviembre"||mesDelAño=="Diciembre")
     {
      alert("Este mes tiene 30 días");
     }
      else 
      {
          alert("Este mes tiene 31 días");
      } 
 }

//función con switch
/*switch(mesDelAño)
{
    case "Febrero":
    alert("Este mes tiene 28 días");
    break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    case "Diciembre":
    alert("Este mes tiene 30 días");
    break;

    default:
    alert("Este mes tiene 31 días");

}

*/

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN