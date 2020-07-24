function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.random();

	//Como random asigna un numero entre 0 y 1 (sin incluir el 1) 
	//lo multiplico por 10 para tener un valor entero
	numeroRandom = numeroRandom * 10;

	//Ahora lo trunco para  quedarme solo con la parte entera
	numeroRandom = Math.floor(numeroRandom);

	//Luego tendria que sumarle 1 ya que de esta manera solo puedo obtener numeros entre 0 y 9
	numeroRandom ++;

	if (numeroRandom < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if (numeroRandom < 9) 
		{
			alert("Aprobo");
		}
		else
		{
			alert("Exelente!");
		}
	}
}//FIN DE LA FUNCIÓN