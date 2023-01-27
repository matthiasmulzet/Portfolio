import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImprintLogoService } from '../imprint-logo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imprintLogo: boolean | undefined;
  @ViewChild('responsiveMenu') responsiveMenu!: ElementRef;
  overlayMenu: boolean = false;
  animateNav: boolean = false;
  languageDE: boolean = false;
  languageEN: boolean = false;

  constructor(public router: Router, private imprintLogoService: ImprintLogoService, public translate: TranslateService) {
  }


  ngOnInit(): void {
    //blue logo appears in header if imprintLogo == true, else white logo appears
    this.imprintLogoService.currentImprintLogo.subscribe(ImprintLogo =>
      this.imprintLogo = ImprintLogo);
  }


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
    if (this.router.url === '/imprint')
      this.imprintLogo = true;
    else
      this.imprintLogo = false;
    this.responsiveMenu.nativeElement.classList.remove('overlay-menu');
    this.animateNav = false;
  }

  translateText(language: string) {
    this.translate.use(language);
    if (language === 'de') {
      this.languageDE = true;
      this.languageEN = false;
    }
    else if (language === 'en') {
      this.languageEN = true;
      this.languageDE = false;
    }
  }
}
