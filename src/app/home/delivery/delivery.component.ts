import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  goToDidi(){
    window.open("https://www.didi-food.com/es-MX/food/store/5764607570158026853/Saz%C3%B3n-PA-TI/", "_blank");
  }

  goToUber(){
    window.open("https://www.ubereats.com/mx/szonpati", "_blank");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
