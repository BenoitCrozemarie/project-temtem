import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private searchedWord$ = new BehaviorSubject<any>({});
  private searchedType$ = new BehaviorSubject<any>({});
  
  selectedSearchedWord$ = this.searchedWord$.asObservable();
  selectedSearchedType$ = this.searchedType$.asObservable();
  constructor() {}

  setSearchWord(searchedWord: any) {    
    this.searchedWord$.next(searchedWord);
  }

  setSearchType(searchedType:any) {
    this.searchedType$.next(searchedType)
  }
}
