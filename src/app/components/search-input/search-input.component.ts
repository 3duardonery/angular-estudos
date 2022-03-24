import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Source } from 'src/app/models/source';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() inputTextQuery: EventEmitter<string> = new EventEmitter<string>();
  @Output() sourceValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: Source[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleInput(text: any): void {
    this.inputTextQuery.emit(text);
  }

  handleSource(source: any): void {
    this.sourceValue.emit(source);
  }

}
