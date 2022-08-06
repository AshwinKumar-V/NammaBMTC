import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

declare var getAccounts: any;
declare var convertToString: any;
declare var putBusData: any;

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  etmForm: any;
  stations =['Mathikere', 'Majestic', 'Kengeri'];
  curr_source: any = 'Mathikere';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.etmForm =this.fb.group({
      Address: ['', [Validators.required]],
      Stop: ['', [Validators.required]],
      TimeStamp: [this.getTimeInFormat(), [Validators.required]],
      Date: [this.getDateInFormat(), [Validators.required]],
      Count: ['', [Validators.required]],
    })
    this.getAddress();
  }

  submitData(etmData: any){
    var result = convertToString(etmData);
    console.log(result);
    putBusData(result);
    console.log("put bus data");
  }

  getDateInFormat(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var new_today = yyyy + "-" + mm + "-" + dd;
    return (new_today)
  }
  getTimeInFormat(){
    var today = new Date();
    var hh = String(today.getHours());
    var mm = String(today.getMinutes());
    var ss = String(today.getSeconds());
    var new_today = hh + ":" + mm + ":" + ss;
    return (new_today)
  }

  async getAddress(){
    this.etmForm.get('Address').setValue(await getAccounts());
  }

}
