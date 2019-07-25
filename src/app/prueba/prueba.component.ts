import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  bandera: boolean;
  band2: boolean;
  band3: boolean;
  constructor() {
    this.bandera = false;
    this.band2 = false;
    this.band3 = false;
  }

  ngOnInit() {
  }
  funcionp() {
    this.bandera = !this.bandera;
  }
  funcp2() {
    this.band2 = !this.band2;
  }
  funcp3() {
    this.band3 = !this.band3;
    document.getElementById("33").hidden;
  }
}
