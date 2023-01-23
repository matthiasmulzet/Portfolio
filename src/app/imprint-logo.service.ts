import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImprintLogoService {
  private imprintLogo = new BehaviorSubject(false);
  currentImprintLogo = this.imprintLogo.asObservable();

  constructor() { }

  updateImprintLogo(imprintLogo: boolean) {
    this.imprintLogo.next(imprintLogo);
  }
}
