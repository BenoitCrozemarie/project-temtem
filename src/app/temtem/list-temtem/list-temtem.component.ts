import { Component, OnInit } from '@angular/core';
import {Temtem} from "../../model/temtem";
import {TemtemService} from "../../temtem.service";

@Component({
  selector: 'app-list-temtem',
  templateUrl: './list-temtem.component.html',
  styleUrls: ['./list-temtem.component.scss']
})
export class ListTemtemComponent implements OnInit {

  temtems: Temtem[] | null = null;
  valueSearch : string  = '';

  constructor(private temtemService:TemtemService) {
  }
  
  ngOnInit(): void {
    this.findAll();

  }

  findAll(){
    this.temtemService.findAll().subscribe(res => {
      this.temtems = res;
      //console.log(res);
    });
  }

}
