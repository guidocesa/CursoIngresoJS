/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var gradosFahrenheit;
    var gradosCentigrados;
    var gradosFahrenheitMenos32;

    gradosFahrenheit = document.getElementById('txtIdTemperatura').value;
    gradosFahrenheit = parseInt(gradosFahrenheit);

    //Segun Google, la relacion   ºF a  ºC es (ºF - 32) * 5/9 = ºC

    gradosFahrenheitMenos32 = gradosFahrenheit - 32;
    gradosCentigrados = gradosFahrenheitMenos32 * (5/9);

    alert("La conversion da " + gradosCentigrados + " grados centigrados.");

}

function CentigradosFahrenheit () 
{
	var gradosFahrenheit;
    var gradosCentigrados;
    var gradosFahrenheitMenos32;

    gradosCentigrados = document.getElementById('txtIdTemperatura').value;
    gradosCentigrados = parseInt(gradosCentigrados);

    //Segun Google, la relacion   ºF a  ºC es (ºF - 32) * 5/9 = ºC
    //Al invertirla (°C * 9/5) + 32 = °F

    gradosFahrenheitMenos32 = gradosCentigrados * (9/5);
    gradosFahrenheit = gradosFahrenheitMenos32 + 32;

    alert("La conversion da " + gradosFahrenheit + " grados Fahrenheit.");

}
