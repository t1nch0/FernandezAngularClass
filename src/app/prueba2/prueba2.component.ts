import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {
  person: any[];
  constructor() {
    this.person = [
      {
        "name": "martin",
        "country": "UK"
      },
      {
        "name": "juan",
        "country": "USA"
      }
    ];

  }

  ngOnInit() {
  }

}
