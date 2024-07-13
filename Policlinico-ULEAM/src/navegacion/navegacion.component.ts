import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
  
})
export class NavegacionComponent implements OnInit {
  isMenuVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
