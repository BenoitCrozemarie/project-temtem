import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemtemComponent } from './temtem/temtem.component';
import { ListTemtemComponent } from './list-temtem/list-temtem.component';

@NgModule({
  declarations: [
    AppComponent,
    TemtemComponent,
    ListTemtemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
