import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImprintLogoService } from '../imprint-logo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private imprintLogoService: ImprintLogoService) {

  }
  ngOnDestroy(): void {
    this.imprintLogoService.updateImprintLogo(false);
  }

  ngOnInit(): void {
    this.imprintLogoService.updateImprintLogo(true);
  }
}
