import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  goToGoogle(){
    window.open("https://www.google.com.mx/maps/place/Saz%C3%B3n+pa'ti/@20.6859265,-103.3649834,17z/data=!3m1!4b1!4m5!3m4!1s0x8428af1076deb73f:0x1958d2e11fe034b3!8m2!3d20.6859215!4d-103.3627947", "_blank");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
