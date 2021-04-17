import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  constructor() { }
  listCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  ngOnInit(): void {
  }

}
