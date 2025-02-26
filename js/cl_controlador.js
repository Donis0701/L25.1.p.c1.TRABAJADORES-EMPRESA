export default class cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarTrabajador() {
        this.modelo.procesarTrabajador(this.vista.procesarTrabajador());
        this.vista.reporteEmpresa(this.modelo.GananciaT, this.modelo.nominaTotal(), this.vista.vTrabajador.nom);
    }
}