import { Component } from '@angular/core';
declare var getData: any;
declare var putData: any;
declare var getAccounts: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NammaBMTC';

  mGetData(){
    return getData();
  }

  mPutData(){
    return putData();
  }

  mGetAccounts(){
    return getAccounts();
  }

}
