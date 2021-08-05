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
    console.log(res);
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
  Fire: "red",
  Neutral: "white",
  Wind: "lime",
  Earth: "brown",
  Water: "blue",
  Nature: "green",
  Electric: "yellow",
  Mental: "pink",
  Digital: "grey",
  Melee: "orange",
  Crystal: "purple",
  Toxic: "black"
}
