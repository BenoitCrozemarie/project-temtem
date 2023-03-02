import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemtemRoutingModule } from './temtem-routing.module';
import {ListTemtemComponent} from "./list-temtem/list-temtem.component";
import {TemtemItemComponent} from "./temtem-item/temtem-item.component";
import { TemtemDetailComponent } from './temtem-detail/temtem-detail.component';
import { StatsProgressBarComponent } from './stats-progress-bar/stats-progress-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TypeComponent } from './type/type.component';



@NgModule({
  declarations: [
    ListTemtemComponent,
    TemtemItemComponent,
    TemtemDetailComponent,
    StatsProgressBarComponent,
    SearchBarComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    TemtemRoutingModule,
    FormsModule,
  ]
})
export class TemtemModule { }
