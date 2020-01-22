import { Component } from '@angular/core';
import { LienService } from './lien.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

constructor(public lienService: LienService){
  
}


}
