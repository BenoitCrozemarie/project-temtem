import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Type } from 'src/app/model/type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit{
  
  @Input() type : Type | null = null;
  @Output() nameEmitted = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClickType(){
    this.nameEmitted.emit(this.type?.name);
  }
}
