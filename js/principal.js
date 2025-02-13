/*Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a
10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere el nombre y
salario obtenido de cada trabajador; además se requiere el monto total de nómina pagada.
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
regular, números de horas extra) (Mary, 30, 10), (José, 35,5), (Carlos, 35,0), (Pedro, 25, 10)
El trabajador Mary tiene un salario de: 550$
El trabajador José tiene un salario de: 475$
El trabajador Carlos tiene un salario de: 350$
El trabajador Pedro tiene un salario de: 500$
Monto total de nómina pagada: 1875$*/
import cl_Empresa from "./cl_Empresa.js";
import cl_Trabajador from "./cl_Trabajador.js";

let trabajador = new cl_Trabajador("Mary", 30, 10);
let trabajador2 = new cl_Trabajador("José", 35, 5);
let trabajador3 = new cl_Trabajador("Carlos", 35, 0);
let trabajador4 = new cl_Trabajador("Pedro", 25, 10);

let empresa = new cl_Empresa();
empresa.procesarTrabajador(trabajador);
empresa.procesarTrabajador(trabajador2);
empresa.procesarTrabajador(trabajador3);
empresa.procesarTrabajador(trabajador4);

let salida = document.getElementById("salida");
salida.innerHTML += `El trabajador Mary tiene un salario de: ${trabajador.nominaTrabajador()}$<br>
El trabajador José tiene un salario de: ${trabajador2.nominaTrabajador()}$<br>
El trabajador Carlos tiene un salario de: ${trabajador3.nominaTrabajador()}$<br>
El trabajador Pedro tiene un salario de: ${trabajador4.nominaTrabajador()}$<br>
Monto total de nómina pagada: ${empresa.nominaTotal()}$`;