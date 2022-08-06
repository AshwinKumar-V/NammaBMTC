import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-usermap',
  templateUrl: './usermap.component.html',
  styleUrls: ['./usermap.component.css']
})
export class UsermapComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.map.buildMap()
  }

}
