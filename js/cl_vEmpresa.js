import cl_vTrabajador from "./cl_vTrabajador.js";
import cl_mTrabajador from "./cl_mTrabajador.js";
export default class cl_vEmpresa {
    constructor() {
        this.controlador = null;
        this.lblTrabajador = document.getElementById("mainForm_lblTrabajador");
        this.lblNominaTotal = document.getElementById("mainForm_lblNominaTotal");
        this.vTrabajador = new cl_vTrabajador();
        this.vTrabajador.btProcesar.onclick = () => this.controlador.procesarTrabajador();
    }
    procesarTrabajador(){
        this.mTrabajador = new cl_mTrabajador({
            nom: this.vTrabajador.nom, 
            horReg: this.vTrabajador.horReg, 
            horExt: this.vTrabajador.horExt});
        return this,this.mTrabajador;
    }
    reporteEmpresa(gananciaT, nominaTotal,nom) {
        this.lblTrabajador.innerHTML += "El trabajador " + nom + " tiene un salario de: " + gananciaT + "$<br>";
        this.lblNominaTotal.innerHTML = nominaTotal;
    }
}