import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemtemRoutingModule } from './temtem-routing.module';
import {ListTemtemComponent} from "./list-temtem/list-temtem.component";
import {TemtemItemComponent} from "./temtem-item/temtem-item.component";
import { TemtemDetailComponent } from './temtem-detail/temtem-detail.component';


@NgModule({
  declarations: [
    ListTemtemComponent,
    TemtemItemComponent,
    TemtemDetailComponent
  ],
  imports: [
    CommonModule,
    TemtemRoutingModule
  ]
})
export class TemtemModule { }
