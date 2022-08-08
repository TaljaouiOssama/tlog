import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  innerWidth!:   any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.innerWidth = event.target.innerWidth;
}

}
