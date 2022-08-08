import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.services',
      once:true,
      onEnter: this.test
    });


}
 test(){
  gsap.from(".services-right-side", { y: 50, duration: 3}); 
  gsap.from(".services-left-side", {opacity: 0, y: 10, duration: 3});
 
}
}
