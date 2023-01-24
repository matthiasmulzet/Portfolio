import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImprintLogoService } from '../imprint-logo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imprintLogo: boolean | undefined;

  constructor(public router: Router, private imprintLogoService: ImprintLogoService) {
  }

  ngOnInit(): void {
    this.imprintLogoService.currentImprintLogo.subscribe(ImprintLogo =>
      this.imprintLogo = ImprintLogo);
  }

  @ViewChild('responsiveMenu') responsiveMenu!: ElementRef;
  overlayMenu: boolean = false;

  animateNav: boolean = false;


  animateResponsiveMenu() {
    if (!this.overlayMenu) {
      this.showResponsiveMenu();
    }

    else
      this.closeResponsiveMenu();
  }


  showResponsiveMenu() {
    this.overlayMenu = true;
    this.imprintLogo = true;
    this.responsiveMenu.nativeElement.classList.add('overlay-menu');
    this.animateNav = true;
  }


  closeResponsiveMenu() {
    this.overlayMenu = false;
    if (this.router.url === '/imprint') {
      this.imprintLogo = true;
    }
    else {
      this.imprintLogo = false;
    }

    this.responsiveMenu.nativeElement.classList.remove('overlay-menu');
    this.animateNav = false;
  }
}
