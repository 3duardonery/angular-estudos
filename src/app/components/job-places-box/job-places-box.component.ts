import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-places-box',
  templateUrl: './job-places-box.component.html',
  styleUrls: ['./job-places-box.component.css']
})
export class JobPlacesBoxComponent implements OnInit {

  @Input() foundJobPlaces: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
