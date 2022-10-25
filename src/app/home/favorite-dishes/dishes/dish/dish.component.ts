import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input()
  name: string | undefined;

  @Input()
  src: string | undefined;

  @Input()
  description: string | undefined;


  constructor() {
  }

  ngOnInit(): void {

  }

}
