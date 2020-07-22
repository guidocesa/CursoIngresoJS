function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.random();

	//Como random asigna un numero entre 0 y 1 (sin incluir el 1) 
	//lo multiplico por 10 para tener un valor entero
	numeroRandom = numeroRandom * 10;

	//Ahora lo trunco para  quedarme solo con la parte entera
	numeroRandom = Math.trunc(numeroRandom);

	//Luego tendria que sumarle 1 ya que de esta manera solo puedo obtener numeros entre 0 y 9
	numeroRandom ++;

	if (numeroRandom < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	if (numeroRandom > 3 && numeroRandom < 9)
	{
		alert("Aprobo");
	}
	if (numeroRandom > 8 )
	{
		alert("Exelente!");
	}


}//FIN DE LA FUNCIÓN