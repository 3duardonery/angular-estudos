import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-place',
  templateUrl: './job-place.component.html',
  styleUrls: ['./job-place.component.css']
})
export class JobPlaceComponent implements OnInit {

  @Input() job!: Job;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(url: string): void {
    this.onClick.emit(url);
  }

}
