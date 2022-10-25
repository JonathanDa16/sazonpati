import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  src = "../../../../assets/img/taco.png"
  changeImg(){
    this.src = this.src == "../../../../assets/img/logo.png" ? "../../../../assets/img/taco.png" : "../../../../assets/img/logo.png";
  }

  constructor() {

  }

  ngOnInit(): void {

    }


}
