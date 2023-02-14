import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/service/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  valueSearch : string  = '';

  constructor(private searchBarService : SearchBarService){
    
  }

  ngOnInit(): void {
    this.onKeyUp();
  }

  onKeyUp(){
    this.searchBarService.setSearchWord(this.valueSearch);
  }

}
