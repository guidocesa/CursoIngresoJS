/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  contadorIntentos = 0;

  numeroSecreto = Math.random();
	numeroSecreto = numeroSecreto * 100;
	numeroSecreto = Math.floor(numeroSecreto);
  numeroSecreto ++;
  
  document.getElementById("txtIdIntentos").value = contadorIntentos;

}

function verificar()
{
  var numeroIngresado;
  
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);

  contadorIntentos++;
  document.getElementById("txtIdIntentos").value = contadorIntentos;

  if(numeroIngresado < numeroSecreto)
  {
    alert("Falta para llegar!");
  }
  else
  {
    if(numeroIngresado > numeroSecreto)
    {
      alert("Se paso!");
    }
    else
    {
      alert("Usted es un ganador!! Y en solo " + contadorIntentos + " intentos.");
    }
  }
	
}