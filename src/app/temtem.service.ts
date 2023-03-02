import {Injectable} from '@angular/core';
import {Temtem} from "./model/temtem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs"
import { Type } from './model/type';

@Injectable({
  providedIn: 'root'
})
export class TemtemService {

  url = "https://temtem-api.mael.tech/api";

  constructor(private http: HttpClient) {
  }

  findAll() : Observable<Temtem[]> {    
    return this.http.get<Temtem[]>(this.url + "/temtems");

  }

  findByNumber(number:number) : Observable<Temtem> {
    return this.http.get<Temtem>(this.url +"/temtems/"+ number);
  }

  findTypes() : Observable<Type[]> {
    return this.http.get<Type[]>(this.url +"/types");
  }
}

