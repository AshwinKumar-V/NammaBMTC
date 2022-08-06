import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var convertToString: any;
declare var addETMData: any;
declare var removeETMData: any;


@Component({
  selector: 'app-admin-add-etm',
  templateUrl: './admin-add-etm.component.html',
  styleUrls: ['./admin-add-etm.component.css']
})
export class AdminAddETMComponent implements OnInit {

  addEtmForm: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addEtmForm =this.fb.group({
      BusReg: ['', [Validators.required]],
      BusRoute: ['', [Validators.required]],
      MaxCapacity: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    })
  }

  submitData(addEtmData: any){
    var result = convertToString(addEtmData);
    console.log(result);
    addETMData( addEtmData.Address, result);
    console.log("put ETM data");
  }

  removeData(address: any){
    removeETMData(address);
    console.log("remove ETM data");
  }
}
