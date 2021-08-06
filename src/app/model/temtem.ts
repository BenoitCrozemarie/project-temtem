import {TypeColor} from "./typeColor";

export class Temtem {
  private _number: number;
  private _name: string;
  private _types: string[];
  private _icon: string;
  private _lumaIcon: string;


  constructor(number: number, name: string, types: string[], icon: string, lumaIcon: string) {
    this._number = number;
    this._name = name;
    this._types = types;
    this._icon = icon;
    this._lumaIcon = lumaIcon;

    }

  get lumaIcon(): string {
    return this._lumaIcon;
  }

  set lumaIcon(value: string) {
    this._lumaIcon = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
