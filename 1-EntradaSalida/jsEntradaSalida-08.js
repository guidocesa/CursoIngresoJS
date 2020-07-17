/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el dividendo.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;

	dividendo = txtIdNumeroDividendo.value;
	dividendo = parseInt(dividendo);
	divisor = txtIdNumeroDivisor.value;
	divisor = parseInt(divisor);	

	if ( !isNaN(dividendo) && !isNaN(divisor) && divisor != 0 )
	{
		resultado = dividendo % divisor;
		alert("El resto es " + resultado + ".");
	}
	else
	{
		alert("Faltan ingresar datos correctos.");
	}
}
