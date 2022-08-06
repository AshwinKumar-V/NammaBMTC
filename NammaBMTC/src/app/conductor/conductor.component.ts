import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  source: any;
  destination: any;
  rate: any;
  quantity: any;

  constructor() { }

  ngOnInit(): void {
  }

}
