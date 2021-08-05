import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTemtemComponent} from './temtem/list-temtem/list-temtem.component';
import {TemtemItemComponent} from "./temtem/temtem-item/temtem-item.component";

const routes: Routes = [{
  path: "temtems", component: ListTemtemComponent
}, {
  path: "temtem-item/:id", component: TemtemItemComponent
},
  { path: 'temtem', loadChildren: () => import('./temtem/temtem.module').then(m => m.TemtemModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
