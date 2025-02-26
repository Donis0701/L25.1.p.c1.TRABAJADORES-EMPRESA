export default class cl_mEmpresa {
    constructor(){
        this.acumGTotal = 0;
        this.GananciaT = 0;
    }
    procesarTrabajador(trabajador){
        this.GananciaT = trabajador.nominaTrabajador();
        this.acumGTotal += this.GananciaT;
    }
    nominaTotal(){
        return this.acumGTotal;
    }

}