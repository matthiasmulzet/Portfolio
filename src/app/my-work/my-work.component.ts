import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  currentLang: string | undefined;

  constructor(public translate: TranslateService) { }


  ngOnInit(): void {
    this.currentLang = 'en';
    this.translate.onLangChange.subscribe((event: { lang: any; }) => {
      this.currentLang = event.lang;
    });
  }


  projects = [
    {
      "img": "join.png",
      "title": "Join",
      "tech-stack": [
        "JavaScript | HTML | CSS"
      ],
      "description-en": `Task manager inspired by the Kanban System. 
      Create and organize tasks using drag and drop functions, 
      assign users and categories.`,
      "description-de": `Aufgabenmanager inspiriert vom Kanban-System. 
      Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, 
      weisen Sie Benutzer und Kategorien zu.`,
      "github-link": 'https://github.com/matthiasmulzet/Kanban-Board',
      "website-link": 'https://join.matthias-mulzet.at/html/login.html'
    },

    {
      "img": "el-pollo-loco.png",
      "title": "El Pollo Loco",
      "tech-stack": [
        "JavaScript | HTML | CSS"
      ],
      "description-en": `Jump, run and throw game based on object-oriented approach.
       Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      "description-de": `El Pollo Loco ist ein Jump, Run and Throw Spiel.
       Hilf Pepe Münzen und Tabasco-Salsa Flaschen zu sammeln, um gegen die 
       verrückte Henne zu kämpfen.`,
      "github-link": 'https://github.com/matthiasmulzet/El-Pollo-Loco',
      "website-link": 'https://el-pollo-loco.matthias-mulzet.at/index.html'
    },

    {
      "img": "ring-of-fire.png",
      "title": "Ring of Fire",
      "tech-stack": [
        "Angular | TypeScript | HTML | CSS | Firebase"
      ],
      "description-en": `Ring of Fire is a popular party drink game in which
       participants must draw cards and perform actions and drink.`,
      "description-de": `Ring of Fire ist ein beliebtes Partytrinkspiel, 
       bei dem die Spieler Karten ziehen, Aktionen ausführen und trinken müssen.`,
      "github-link": 'https://github.com/matthiasmulzet/Ring-of-Fire',
      "website-link": 'https://ringoffire-bcd6f.web.app/'
    },

    {
      "img": "simple-crm.png",
      "title": "Portfolio",
      "tech-stack": [
        "Angular | TypeScript | HTML | CSS"
      ],
      "description-en": `Do you like my portfolio website? Feel free to take a
       look behind the scenes on Github.`,
      "description-de": `Gefällt Ihnen meine Portfolio-Website? Werfen Sie gerne
       einen Blick hinter die Kulissen auf Github.`,
      "github-link": 'https://github.com/matthiasmulzet/Portfolio',
      "website-link": 'https://matthias-mulzet.at/'
    },
  ]


  forwardingToLink(link: any) {
    window.open(link);
  }
}
