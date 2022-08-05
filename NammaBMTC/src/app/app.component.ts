import { Component } from '@angular/core';
declare var getData: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NammaBMTC';

  buttonAction(){
    return getData();
  }

}
