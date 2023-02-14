export class Type {
    private _name: string;
    private _icon: string;
    
    constructor(name: string, icon: string) {
        this._name = name;
        this._icon = icon;
    }
    
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }


}