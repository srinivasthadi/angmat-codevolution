import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  oopened = false;

  log(state: string){
    console.log(state);
  }
  // notifications: number = 2;

  // showSpinner : boolean = false;

  // loadData(){
  //   this.showSpinner = true;
  //   setTimeout(() => this.showSpinner = false,
  //    5000);
  // }
}
