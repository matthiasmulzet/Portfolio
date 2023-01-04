import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartpageComponent } from './startpage/startpage.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WholePageComponent } from './whole-page/whole-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartpageComponent,
    IntroductionComponent,
    WholePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
