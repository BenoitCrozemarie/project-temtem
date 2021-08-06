import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTemtemComponent} from "./list-temtem/list-temtem.component";
import {TemtemItemComponent} from "./temtem-item/temtem-item.component";
import {TemtemDetailComponent} from "./temtem-detail/temtem-detail.component";


const routes: Routes = [{
  path: '', component: ListTemtemComponent},{
  path:':id',component: TemtemDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemtemRoutingModule { }
