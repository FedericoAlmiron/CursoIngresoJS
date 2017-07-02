function Mostrar()
{
//tomo la edad  
 var age;
 age=document.getElementById("edad").value;

 if(age <13)
 {
     alert("Usted es niño.");
 }
  else if(age >=18)
   {
       alert("Usted es adulto.");
   }  
   else
    {
       alert("Usted es adolescente.");
    }

}//FIN DE LA FUNCIÓN