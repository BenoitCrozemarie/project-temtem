import {Injectable} from '@angular/core';
import {Temtem} from "./model/temtem";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TemtemService {

  url = "https://temtem-api.mael.tech/api/temtems";

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Temtem[]>(this.url);
  }

  findByNumber(number:number) {
    return this.http.get<Temtem>(this.url +"/"+ number);
  }
}
