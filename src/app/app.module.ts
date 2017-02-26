import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule }      from '@angular/core';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule ],
  declarations: [
    AppComponent,
    HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
