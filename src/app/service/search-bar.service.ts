import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private searchedWord$ = new BehaviorSubject<any>({});
  selectedSearchedWord$ = this.searchedWord$.asObservable();
  constructor() {}

  setSearchWord(searchedWord: any) {
    console.log(searchedWord);
    
    this.searchedWord$.next(searchedWord);
  }
}
