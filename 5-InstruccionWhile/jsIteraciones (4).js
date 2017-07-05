function Mostrar()
{

var numero = prompt("Ingrese un número entre 0 y 10.");
while(numero <0 || numero >10)
{
	numero = prompt("Ingrese nuevamente un número entre 0 y 10.");
}
alert("Número correcto.");


}//FIN DE LA FUNCIÓN