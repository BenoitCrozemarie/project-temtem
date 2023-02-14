import { Component, OnInit } from '@angular/core';
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
  

  constructor(private temtemService:TemtemService,
              private searchBarService : SearchBarService) {
  }
  
  ngOnInit() : void {
    this.findAll();
    this.searchBarService.selectedSearchedWord$.subscribe((value)=>{
      this.searchValue = value;
    })
  }

  findAll() : void {
    this.temtemService.findAll().subscribe(res => {
      this.temtems = res;
    });
  }

}
