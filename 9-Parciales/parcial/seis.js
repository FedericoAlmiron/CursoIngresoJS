function Mostrar()
//Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
//hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
//importe de venta.
{
    var importe;
    var contadordias=0;
    var maximo;
    var minimo;
    var bandera=true;


    while(contadordias < 24)
    {
        contadordias++;
        importe=parseInt(prompt("Ingrese el importe."));
        while(importe<0)
        {
          importe=parseInt(prompt("Ingrese el importe."));  
        }
      if(bandera)  
      {
        bandera=false
        maximo=importe
        minimo=importe
      }
      else
      {
          if(impuesto>maximo)
          {
              maximo=impuesto
          }
          if(impuesto<minimo)
          {
              minimo=impuesto
          }
      }
    }
    document.write("El mayor importe de venta fue: $"+maximo);
    document.write("El menor importe de venta fue: $"+minimo);
}
