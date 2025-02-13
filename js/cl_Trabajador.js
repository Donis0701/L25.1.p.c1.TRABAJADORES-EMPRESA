export default class cl_Trabajador {
    constructor(nom, horReg, horExt) {
        this._nom = nom;
        this._horReg = horReg;
        this._horExt = horExt;
    }
    set nom(n){
        this._nom = n;
    }
    get nom(){
        return this._nom;
    }
    set horReg(h){
        this._horReg = +h;
    }
    get horReg(){
        return this._horReg;
    }
    set horExt(e){
        this._horExt = +e;
    }
    get horExt(){
        return this._horExt;
    }
    nominaTrabajador(){
        return this.horReg * 10 + this.horExt * 25;
    }
}