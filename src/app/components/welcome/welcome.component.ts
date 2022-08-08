import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  path !:SVGPathElement|null;
  circle !:SVGCircleElement|null;
  point!: DOMPoint;
  car!:HTMLElement|null;
  constructor() { }

  ngOnInit(): void {
    // Query DOM Elements
 this.path= document.querySelector('.infinity');
 this.circle= document.querySelector('.circle');
 this.car=document.querySelector('.svg-car');

// Create an object that gsap can animate
const val = { distance: 0 };
// Create a tween
gsap.to(val, {
  // Animate from distance 0 to the total distance
  //distance: path.getTotalLength(),
  distance:1520,
  // Loop the animation
  repeat: -1,
  // Make the animation lasts 5 seconds
  duration: 5,
  // Function call on each frame of the animation
  onUpdate: () => {
    // Query a point at the new distance value
    if(this.path!=null)
       this.point = this.path.getPointAtLength(val.distance);
    // Update the circle coordinates
      if(this.circle!=null){
        this.circle.setAttribute("cx", this.point.x+"");
        this.circle.setAttribute("cy", this.point.y+"");
      }
        
  }
});
gsap.to(".svg-car", {rotation: 0, x: 800, duration: 5});
gsap.to("button", {rotationZ: 1080, duration: 5});
gsap.from(".blob-svg", {opacity: 0, y: 10, duration: 5});
gsap.from(".welcome-left-side", { y: 50, duration: 5}); 

  }

}
