import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/model/type';
import { SearchBarService } from 'src/app/service/search-bar.service';
import { TemtemService } from 'src/app/temtem.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  valueSearch : string  = '';
  typesSearch : string[] = [];
  types : Type[] = [];
  

  constructor(private searchBarService : SearchBarService, 
              private temtemService : TemtemService){
    
  }

  ngOnInit(): void {
    this.onKeyUp();
    this.findTypes();
  }

  onKeyUp(){
    this.searchBarService.setSearchWord(this.valueSearch);
  }

  findTypes() : void {
    this.temtemService.findTypes().subscribe(res => {
      this.types = res;
    });
  }

  searchType(type: string){
    var index = this.typesSearch.indexOf(type)
    if (index != -1){
      this.typesSearch.splice(index,1);
    } else {
      this.typesSearch.push(type);
    }
    
    this.searchBarService.setSearchType(this.typesSearch);
  }

}
