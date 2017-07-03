function Mostrar()
{
//tomo la edad  
 var age;
 var ecivil;
 age=document.getElementById("edad").value;
 ecivil=document.getElementById("estadoCivil").value

 if(age >=18 && ecivil == "Soltero")
  {
      alert("Es soltero y no es menor.");
  }
}//FIN DE LA FUNCIÓN