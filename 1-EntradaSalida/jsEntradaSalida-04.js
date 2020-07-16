/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
//Aunque la funcion se llame "mostrar" el boton fue cambiado a ingresar para que sea intuitivo
function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt("Por favor ingrese su nombre" , "Juan Perez");

	//En este caso estamos cargando el cuadro de texto con el valor ingresado por el usuario
	txtIdNombre.value=nombreIngresado; 
}

