import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

declare var getData: any;

@Component({
  selector: 'app-usermap',
  templateUrl: './usermap.component.html',
  styleUrls: ['./usermap.component.css']
})
export class UsermapComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.getData2();
    // var commuterData = allData[0];
    // var busData = allData[1];
    // console.log(commuterData);
    // console.log(busData);
    this.map.buildMap()
  }

  async getData2(){
    let x =  await getData();
    console.log(x);
    return x;
  }


}
