import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store'; 
import { map, take } from 'rxjs';
import { IFilterState } from 'src/app/store/app.state';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number = 0;
  @Output() currentPageClick: EventEmitter<any> = new EventEmitter();
  pagination: number[] = [];
  current_page$ = this._store.select('app').pipe(
    map(e => e.current_page)
  );
 
  constructor(private _store: Store<{app: IFilterState}>) { }

  ngOnInit(): void {
    this.pagination = Array(this.totalPages).fill(0).map((x,i)=>i+1);
    console.log(this.getCurrentPage());
  }

  handleClick(page: any): void {
    this.currentPageClick.emit(page);
  }

  getCurrentPage(): number {
    let current_page = 1;
    this.current_page$.pipe(take(1)).subscribe(d => current_page = d);
    return current_page;
  }
}
