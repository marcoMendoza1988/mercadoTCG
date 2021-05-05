import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class HeaderComponent {
  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  closeResult!: string;
  usersession: string = 'loginSession';
  constructor(config: NgbCarouselConfig, private modalService: NgbModal) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  
  open(content: any) {
    this.modalService.open(content, { size: 'lg' ,ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
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
