import { Component, OnInit } from '@angular/core';
import { Temtem } from 'src/app/model/temtem';
import {ActivatedRoute} from "@angular/router";
import {TemtemService} from "../../temtem.service";

@Component({
  selector: 'app-temtem-detail',
  templateUrl: './temtem-detail.component.html',
  styleUrls: ['./temtem-detail.component.scss']
})
export class TemtemDetailComponent implements OnInit {
  
  temtem :  Temtem | null = null;
  constructor(private temtemService:TemtemService, private route: ActivatedRoute) { 
  }
  
  ngOnInit(): void {
    this.findByNumber(Number(this.route.snapshot.paramMap.get('id')));
  }

  findByNumber(id : number) {
    this.temtemService.findByNumber(id)
      .subscribe((res : Temtem) => {
        this.temtem = res;        
      });
  }
}
