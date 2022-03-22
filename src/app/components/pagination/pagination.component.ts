import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number = 0;
  @Output() currentPageClick: EventEmitter<any> = new EventEmitter();
  pagination: number[] = [];
 
  constructor() { }

  ngOnInit(): void {
    this.pagination = Array(this.totalPages).fill(0).map((x,i)=>i+1);
  }

  handleClick(page: any): void {
    this.currentPageClick.emit(page);
  }


}
