import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTemtemComponent} from './list-temtem/list-temtem.component';
import {TemtemComponent} from "./temtem/temtem.component";

const routes: Routes = [{
  path: "temtems", component: ListTemtemComponent
}, {
  path: "temtem/:id", component: TemtemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
