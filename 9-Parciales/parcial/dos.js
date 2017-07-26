function Mostrar()
{
  //realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final sumándole el IVA (21%)/*

  var importe;
  var importefinal;

  importe=parseInt(prompt("Ingrese el importe."));
  importefinal= importe*1.21

  document.getElementById("importeFinal").value=importefinal;
  alert("El importe final con IVA es: "+importefinal);
}
