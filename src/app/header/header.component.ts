import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router) { }
  @ViewChild('responsiveMenu') responsiveMenu!: ElementRef;
  overlayMenu: boolean = false;

  showResponsiveMenu() {
    this.overlayMenu = true;
    this.responsiveMenu.nativeElement.classList.add('overlay-menu');
  }

  closeResponsiveMenu() {
    this.overlayMenu = false;
    this.responsiveMenu.nativeElement.classList.remove('overlay-menu');
  }
}
