/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	//Se checkea que el usuario haya ingresado valores
	if (nombreIngresado != 0 && edadIngresada != 0 )
	{

		alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.");

	}
	else 
	{
		//Se da un mensaje de error en caso de que no sea asi
		alert("Error: Faltan ingresar valores");
	}
}

