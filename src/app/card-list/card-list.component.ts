import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
  
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
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
  title = 'appBootstrap';
  
  closeResult!: string;
  
  constructor(private modalService: NgbModal) {}
    
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
