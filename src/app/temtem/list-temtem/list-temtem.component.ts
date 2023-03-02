import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/model/type';
import { SearchBarService } from 'src/app/service/search-bar.service';
import {Temtem} from "../../model/temtem";
import {TemtemService} from "../../temtem.service";

@Component({
  selector: 'app-list-temtem',
  templateUrl: './list-temtem.component.html',
  styleUrls: ['./list-temtem.component.scss']
})
export class ListTemtemComponent implements OnInit {

  temtems: Temtem[] | null = null;
  searchValue : string = "";
  searchType : Type[] = [];
  

  constructor(private temtemService:TemtemService,
              private searchBarService : SearchBarService) {
  }
  
  ngOnInit() : void {
    this.findAll();
    
    this.searchBarService.selectedSearchedWord$.subscribe((value)=>{
      this.searchValue = value;
      console.log("value searched changed : "+ value);
    });
    
    this.searchBarService.selectedSearchedType$.subscribe((value)=>{
      this.searchType = value;
      console.log("type searched changed : "+ value);
    });
  }

  findAll() : void {
    this.temtemService.findAll().subscribe(res => {
      this.temtems = res;
    });
  }

  compareType(temtem : Temtem) : boolean {

    var bool = false;
    
    if(!this.searchType){
      console.log("searchType undefined");

      bool = true;
    }else {
      console.log("V");
      
      console.log(this.searchType);
      
      for (const type of this.searchType) {
        console.log(type + " | " , temtem.types);
        console.log(type.name);
        
        if(temtem.types.includes(type.name)){
          bool =  true;
        }
      }
    }
    
    return bool;
  }

}
