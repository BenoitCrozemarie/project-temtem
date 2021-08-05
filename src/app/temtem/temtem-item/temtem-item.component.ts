import {Component, Input, OnInit} from '@angular/core';
import {Temtem} from "../../model/temtem";
import {ActivatedRoute} from "@angular/router";
import {TemtemService} from "../../temtem.service";

@Component({
  selector: 'app-temtem',
  templateUrl: './temtem-item.component.html',
  styleUrls: ['./temtem-item.component.scss']
})
export class TemtemItemComponent implements OnInit {

  @Input() temtem:Temtem | null = null;

  constructor(private temtemService : TemtemService,
              private route : ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  findByNumber(){
    this.temtemService.findByNumber(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(res =>{
        this.temtem = res;
        console.log(res);
      });
  }
}
