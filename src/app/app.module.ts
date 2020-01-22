import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LienService } from './lien.service';
import { LogoDirective } from './logo.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LogoDirective ],
  bootstrap:    [ AppComponent ],
  providers: [LienService]
})
export class AppModule { }
