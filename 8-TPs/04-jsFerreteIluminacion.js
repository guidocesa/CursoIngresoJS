/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidadLamparas;
     var marcaSeleccionada;
     var importeParcial;
     var importeFinal;
     var porcentajeDeDescuento = 0;
     var descuento = 0;
     var porcentajeIngresosBrutos = 10;
     var importeImpuesto;
     var precioPorLampara = 35;
     
     var cantidadLamparas = document.getElementById("txtIdCantidad").value;
     var cantidadLamparas = parseInt(cantidadLamparas);

     var marcaSeleccionada = document.getElementById("Marca").value;

     if(cantidadLamparas > 5)
     {
         porcentajeDeDescuento = 50;
     }
     if(cantidadLamparas == 5)
     {
         if(marcaSeleccionada == "ArgentinaLuz")
         {
             porcentajeDeDescuento = 40;
         }
         else
         {
             porcentajeDeDescuento = 30;
         }
     }
     if(cantidadLamparas == 4)
     {
         if(marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas")
         {
             porcentajeDeDescuento = 25;
         }
         else
         {
             porcentajeDeDescuento = 20;
         }
     }
     if(cantidadLamparas == 3)
     {
         if(marcaSeleccionada == "ArgentinaLuz")
         {
             porcentajeDeDescuento = 15;
         }
         if(marcaSeleccionada == "FelipeLamparas")
         {
             porcentajeDeDescuento = 10;
         }
         else
         {
             porcentajeDeDescuento = 5;
         }
     }

     //Se ajusta el porcentaje de descuento para poder multilpicar por el importe parcial y obtener el descuento a aplicar
     porcentajeDeDescuento = porcentajeDeDescuento / 100;
     //Tambien ajusto el prcentaje de impuesto
     porcentajeIngresosBrutos = porcentajeIngresosBrutos / 100;

     importeParcial = cantidadLamparas * precioPorLampara;
     descuento = importeParcial * porcentajeDeDescuento;
     importeFinal = importeParcial - descuento;

     //Checkeo si corresponde agregar ingresos brutos
     if(importeFinal > 120)
     {
        importeImpuesto = importeFinal * porcentajeIngresosBrutos;
        importeFinal = importeFinal + importeImpuesto;
        alert("Se pago $" + importeImpuesto + " de Ingresos Brutos.");
     }

     document.getElementById("txtIdprecioDescuento").value = importeFinal;
}