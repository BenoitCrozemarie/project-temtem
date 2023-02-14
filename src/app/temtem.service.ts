import {Injectable} from '@angular/core';
import {Temtem} from "./model/temtem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TemtemService {

  url = "https://temtem-api.mael.tech/api/temtems";

  constructor(private http: HttpClient) {
  }

  findAll() : Observable<Temtem[]> {    
    return this.http.get<Temtem[]>(this.url);

  }

  findByNumber(number:number) : Observable<Temtem> {
    return this.http.get<Temtem>(this.url +"/"+ number);
  }
}

