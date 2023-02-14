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

  @Input() temtem: Temtem | null = null;
  color1 = "";
  color2: string | null = null;

  constructor(private temtemService: TemtemService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.temtem);
  }

  getType() {
    let res = "";

    if (this.temtem?.types != null) {
      if (this.temtem.types.length == 1) {
        res = colors[this.temtem.types[0]]+", "+colors[this.temtem.types[0]];
      } else {
        for (let type of this.temtem?.types) {
          res += colors[type] + ",";
        }
        res = res.slice(0, res.length - 1)
      }
    }
    //console.log(res);
    // res="red,blue"

    return res;
  }

  setBackgroundColor() {

  }

  findByNumber() {
    this.temtemService.findByNumber(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(res => {
        this.temtem = res;
        console.log(res);
      });
  }
}

const colors: any = {
  Fire: "#E85B4F",
  Neutral: "#E7F7F6",
  Wind: "#09FBB2",
  Earth: "#B97961",
  Water: "#44CBFF",
  Nature: "#ADDE77",
  Electric: "#FFE076",
  Mental: "#C269A3",
  Digital: "#A5C0C2",
  Melee: "#F99462",
  Crystal: "#EA4B68",
  Toxic: "#5A575D"
}
