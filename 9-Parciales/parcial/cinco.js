function Mostrar()
//SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
//informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
{
    var mes;
    mes= prompt("Ingrese un día de la semana.")

    switch(mes)
    {
        case "Sábado":
        case "Domingo":
        alert("Es fin de semana.");
        break

        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
        alert("A trabajar!!!")
        break

        default:
        alert("No es un día de la semana.");
    }
}
