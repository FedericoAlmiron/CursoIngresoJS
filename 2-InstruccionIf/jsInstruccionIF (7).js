function Mostrar()
{
//tomo la edad  
 var age;
 age=document.getElementById("edad").value;

 if(age <18 && (document.getElementById("estadoCivil").value != "Soltero"))
  {
      alert("Es muy pequeño para NO ser soltero.");
  }
}//FIN DE LA FUNCIÓN