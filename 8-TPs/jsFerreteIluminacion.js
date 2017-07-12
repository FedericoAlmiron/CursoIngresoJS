/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var lamparas=35;
var preciofinal;
var marca;
var cantidad;
var ibrutos;


function CalcularPrecio () 
{
    marca=document.getElementById("Marca").value;
    cantidad=parseInt(document.getElementById("Cantidad").value);

    if(cantidad>=6)//punto A
    {
        preciofinal=(lamparas*cantidad)*0.50;
        document.getElementById("precioDescuento").value=preciofinal;
    }
     else if(cantidad==5)//punto B
      {
         if(marca=="ArgentinaLuz")
         {
         preciofinal=(lamparas*cantidad)*0.40
         document.getElementById("precioDescuento").value=preciofinal;
         }
          else 
         {
         preciofinal=(lamparas*cantidad)*0.30
         document.getElementById("precioDescuento").value=preciofinal;
         }
      }
     else if(cantidad==4)//punto C
       {  
         if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
         {
          preciofinal=(lamparas*cantidad)*0.25
          document.getElementById("precioDescuento").value=preciofinal;
         }
         else
         {
           preciofinal=(lamparas*cantidad)*0.20
           document.getElementById("precioDescuento").value=preciofinal;
         }
       }  
    else if(cantidad==3)//punto D
       {
         if(marca=="ArgentinaLuz")  
         {
           preciofinal=(lamparas*cantidad)*0.15
           document.getElementById("precioDescuento").value=preciofinal;
         }
         else if(marca=="FelipeLamparas")
         {
           preciofinal=(lamparas*cantidad)*0.10
           document.getElementById("precioDescuento").value=preciofinal;
         }
         else
         {
           preciofinal=(lamparas*cantidad)*0.05
           document.getElementById("precioDescuento").value=preciofinal;
         }
         
        if(preciofinal>120)//punto E
        {
            ibrutos=preciofinal*0.1
            alert("IIBB Usted pago $"+preciofinal+", siendo $"+ibrutos+"el impuesto que se pagó.");
        }
       }
}
