import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { 
    
  }
  mediaQuery(i:number){
    let query = i % 9 == 0 ? true : false
    return query ? 'col-md-12' : 'col-md-4'
  }
  minValue: number = 50;
  maxValue: number = 50000;
  options: Options = {
    floor: 50,
    ceil: 50000,
    step: 10,
    showTicks: true
  };

                  
  cardList = [
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '10 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '6 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '11 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '20 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '3 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '7 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '10 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '6 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '11 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '20 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '3 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '7 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '10 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '6 disponibles', price: '150', currency: 'MXN'},
    {img: '../../assets/img/card_01.png', title: 'FAEBURROW ELDER', state: 'Buen estado', cards: '11 disponibles', price: '150', currency: 'MXN'},
  ];

  ngOnInit(): void {
  }

}
