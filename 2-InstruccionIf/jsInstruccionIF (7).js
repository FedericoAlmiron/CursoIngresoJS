function Mostrar()
{
//tomo la edad  
 var age;
 var ecivil;
 age=document.getElementById("edad").value;
 civil=document.getElementById("estadoCivil").value;

 if(age <18 && ecivil != "Soltero")
  {
      alert("Es muy pequeño para NO ser soltero.");
  }
}//FIN DE LA FUNCIÓN