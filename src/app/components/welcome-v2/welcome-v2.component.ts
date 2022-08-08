import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-welcome-v2',
  templateUrl: './welcome-v2.component.html',
  styleUrls: ['./welcome-v2.component.css']
})
export class WelcomeV2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.to(".svg-car", {rotation: 0, x: 730, duration: 5});
    gsap.from(".welcome-left-side", { y: 50, duration: 5}); 
    gsap.from(".delivery-man", {opacity: 0, y: 10, duration: 5});
  }

}
