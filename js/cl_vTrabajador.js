export default class cl_vTrabajador {
    constructor(){
        this.inNom = document.getElementById("trabajadorForm_inNom");
        this.inHorReg = document.getElementById("trabajadorForm_inHorReg");
        this.inHorExt = document.getElementById("trabajadorForm_inHorExt");
        this.btProcesar = document.getElementById("trabajadorForm_btProcesar");
    }
    get nom(){
        return this.inNom.value;
    }
    get horReg(){
        return +this.inHorReg.value;
    }
    get horExt(){
        return +this.inHorExt.value;
    }
}