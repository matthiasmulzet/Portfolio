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

  constructor(public router: Router, private imprintLogoService: ImprintLogoService) { }

  ngOnInit(): void {
    this.imprintLogoService.currentImprintLogo.subscribe(ImprintLogo =>
      this.imprintLogo = ImprintLogo);
  }

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
