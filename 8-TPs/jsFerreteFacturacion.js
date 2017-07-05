/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var num1;
    var num2;
    var num3;
    var resultado;
function Sumar () 
{
    num1=parseInt(document.getElementById("PrecioUno").value);
    num2=parseInt(document.getElementById("PrecioDos").value);
    num3=parseInt(document.getElementById("PrecioTres").value);
    resultado=num1+num2+num3;
    alert("La suma total es: "+resultado);
}
function Promedio () 
{
    num1=parseInt(document.getElementById("PrecioUno").value);
    num2=parseInt(document.getElementById("PrecioDos").value);
    num3=parseInt(document.getElementById("PrecioTres").value);
    resultado=(num1+parseIntnum2+parseIntnum3)/3;
    alert("El promedio es: "+resultado);
}
function PrecioFinal () 
{
    num1=parseInt(document.getElementById("PrecioUno").value);
    num2=parseInt(document.getElementById("PrecioDos").value);
    num3=parseInt(document.getElementById("PrecioTres").value);
    resultado=(num1+num2+num3)*1.21;
    alert("El precio final es: "+resultado);
}