import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

declare var getData: any;

@Component({
  selector: 'app-usermap',
  templateUrl: './usermap.component.html',
  styleUrls: ['./usermap.component.css']
})
export class UsermapComponent implements OnInit {

  allData: any;

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.map.buildMap()
    this.allData=  getData();
    setTimeout(() => {
      console.log(this.allData);
    }, 2000);

    // var commuterData = allData[0];
    // var busData = allData[1];
    // console.log(commuterData);
    // console.log(busData);
  }

}
