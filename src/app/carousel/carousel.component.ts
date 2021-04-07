import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },{
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
    {
      title: 'Darksteel Mutation',
      description: 'Estado: Regular Estado',
      buttonText: 'desde MXN $90',
      img: '../../assets/img/card_01.png'
    },
  ];
  slides: any = [[]];
  chunk(arr:any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
}
