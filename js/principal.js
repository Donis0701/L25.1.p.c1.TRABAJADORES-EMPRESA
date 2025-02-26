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
import cl_vEmpresa from "./cl_vEmpresa.js";
import cl_mEmpresa from "./cl_mEmpresa.js";
import cl_controlador from "./cl_controlador.js";
export default class cl_principal{
    constructor(){
        let modelo = new cl_mEmpresa();
        let vista = new cl_vEmpresa();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}