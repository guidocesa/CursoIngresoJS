/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/


function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;
	var mensajeAMostrar;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById('estadoCivil').value;

	if (edadIngresada > 17 )
	{
		mensajeAMostrar = "Se responsable";
		
		if(edadIngresada > 59)
		{
			mensajeAMostrar = (mensajeAMostrar + ", sos persona de riesgo");
		}
		if(estadoCivilIngresado == "Soltero")
		{
			mensajeAMostrar = (mensajeAMostrar + ", a vivir la vida");
		}
		else
		{
			if(estadoCivilIngresado == "Casado")
			{
				mensajeAMostrar = (mensajeAMostrar + ", a disfrutar la pareja");
			}
		}
	}
	else
	{
		mensajeAMostrar = "Respeta a tus mayores";

		if(edadIngresada < 13)
		{
			mensajeAMostrar = (mensajeAMostrar + ", hace la tarea");
		}
		else
		{
			if(estadoCivilIngresado != "Soltero")
			{
				mensajeAMostrar  = (mensajeAMostrar + ", sos muy joven para no ser soltero");
			}
		}
	}
	if(estadoCivilIngresado == "Divorciado")
	{
		mensajeAMostrar = (mensajeAMostrar + ", a intentarlo nuevamente");
	}

	alert(mensajeAMostrar + "!");

}//FIN DE LA FUNCIÓN