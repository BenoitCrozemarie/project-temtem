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

  temtems: Temtem[] = [];
  displayTemtems: Temtem[] = [];

  constructor(
    private temtemService:TemtemService
  ) {
  }

  ngOnInit() : void {
    this.findAll();
  }

  findAll() : void {
    this.temtemService.findAll().subscribe(res => {
      this.temtems = res;
      this.displayTemtems = this.temtems;
    });
  }

  updateDatas(search: string): void {
    console.log(search);
    this.displayTemtems = this.temtems.filter((temtem) =>
      temtem.name.toLowerCase().includes(search)
      ||
      temtem.types.includes(search)
      ||
      search == ''
    );
    console.log(this.displayTemtems);
  }
}
