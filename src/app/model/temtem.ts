export class Temtem {
  private _number: number;
  private _name: string;
  private _types: string[];
  private _portraitWikiUrl: string;
  private _wikiPortraitUrlLarge: string;


  constructor(number: number, name: string, types: string[], portraitWikiUrl: string, wikiPortraitUrlLarge: string) {
    this._number = number;
    this._name = name;
    this._types = types;
    this._portraitWikiUrl = portraitWikiUrl;
    this._wikiPortraitUrlLarge = wikiPortraitUrlLarge;
    }

  get wikiPortraitUrlLarge(): string {
    return this._wikiPortraitUrlLarge;
  }

  set wikiPortraitUrlLarge(value: string) {
    this._wikiPortraitUrlLarge = value;
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

  get portraitWikiUrl(): string {
    return this._portraitWikiUrl;
  }

  set portraitWikiUrl(value: string) {
    this._portraitWikiUrl = value;
  }
}
