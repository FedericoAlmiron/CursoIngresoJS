/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
    var largo;
    var ancho;
    var resultado;
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    resultado=(2*(largo+ancho))*3;
    alert("La cantidad de alambre es: "+resultado);
}
function Circulo () 
{
    var radio;
    var resultado;
    radio=parseInt(document.getElementById("Radio").value);
    resultado=(Math.PI*radio*radio)*3;
    alert("La cantidad de alambre es: "+resultado);
}
function Materiales () 
{
    var largo;
    var ancho;
    var materialesce;
    var materialesca;
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    materialesce=(largo*ancho)*2;
    materialesca=(largo*ancho)*3;
    alert("La cantidad de bolsas de cemento son: "+materialesce+" y de cal son: "+materialesca);
}