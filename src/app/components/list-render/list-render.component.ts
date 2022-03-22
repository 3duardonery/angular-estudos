import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: any = [
    {name: 'Caramelo', type: 'Pé Duro'},
    {name: 'Teste', type: 'Vira-lata'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
