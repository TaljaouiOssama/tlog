import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.tracking',
      once:true,
      onEnter: this.test
    });

  }
  test(){
    gsap.from(".left-side", { y: 50, duration: 3}); 
    gsap.from(".right-side", {opacity: 0, y: 10, duration: 3});
  }

}
