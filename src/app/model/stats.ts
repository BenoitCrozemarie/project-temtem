export class Stats {
    private _hp: number;
    private _sta: number;
    private _spd: number;
    private _atk: number;
    private _def: number;
    private _spatk: number;
    private _spdef: number;
    private _total: number;
    
    constructor(hp: number, sta: number, spd: number, atk: number, def: number, spatk: number, spdef: number, total: number){
        this._hp = hp;
        this._sta = sta;
        this._spd = spd;
        this._atk = atk;
        this._def = def;
        this._spatk = spatk;
        this._spdef = spdef;
        this._total = total;
    }

    get hp(): number {
        return this._hp;
    }
    set hp(value: number) {
        this._hp = value;
    }

    get spd(): number {
        return this._spd;
    }
    set spd(value: number) {
        this._spd = value;
    }

    get sta(): number {
        return this._sta;
    }
    set sta(value: number) {
        this._sta = value;
    }

    get atk(): number {
        return this._atk;
    }
    set atk(value: number) {
        this._atk = value;
    }

    get def(): number {
        return this._def;
    }
    set def(value: number) {
        this._def = value;
    }

    get spatk(): number {
        return this._spatk;
    }
    set spatk(value: number) {
        this._spatk = value;
    }

    get spdef(): number {
        return this._spdef;
    }
    set spdef(value: number) {
        this._spdef = value;
    }

    get total(): number {
        return this._total;
    }
    set total(value: number) {
        this._total = value;
    }

}