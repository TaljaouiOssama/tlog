import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-tracking-system',
  templateUrl: './tracking-system.component.html',
  styleUrls: ['./tracking-system.component.css']
})
export class TrackingSystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.tracking-system',
      once:true,
      onEnter: this.test
    });

  }
  test(){
    gsap.from(".tracking-system-left-side", { y: 50, duration: 3}); 
    gsap.from(".tracking-system-right-side", {opacity: 0, y: 10, duration: 3});
  }

}
