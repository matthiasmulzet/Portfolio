import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor(public translate: TranslateService) { }


  ngOnInit(): void {

  }

  projects = [
    {
      "img": "join.png",
      "title": "Join",
      "tech-stack": [
        "JavaScript | HTML | CSS"
      ],
      "description": `Task manager inspired by the Kanban System. 
      Create and organize tasks using drag and drop functions, 
      assign users and categories.`,
      "github-link": 'https://github.com/matthiasmulzet/Kanban-Board',
      "website-link": 'https://join.matthias-mulzet.at/html/login.html'
    },

    {
      "img": "el-pollo-loco.png",
      "title": "El Pollo Loco",
      "tech-stack": [
        "JavaScript | HTML | CSS"
      ],
      "description": `Jump, run and throw game based on object-oriented approach.
       Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      "github-link": 'https://github.com/matthiasmulzet/El-Pollo-Loco',
      "website-link": 'https://el-pollo-loco.matthias-mulzet.at/index.html'
    },

    {
      "img": "ring-of-fire.png",
      "title": "Ring of Fire",
      "tech-stack": [
        "Angular | TypeScript | HTML | CSS | Firebase"
      ],
      "description": `Ring of Fire is a popular party drink game in which
       participants must draw cards and perform actions and drink.`,
      "github-link": 'https://github.com/matthiasmulzet/Ring-of-Fire',
      "website-link": 'https://ringoffire-bcd6f.web.app/'
    },

    {
      "img": "simple-crm.png",
      "title": "Portfolio",
      "tech-stack": [
        "Angular | TypeScript | HTML | CSS"
      ],
      "description": `Do you like my portfolio website? Feel free to take a
       look behind the scenes on Github.`,
      "github-link": 'https://github.com/matthiasmulzet/Portfolio',
      "website-link": 'https://matthias-mulzet.at/index.html'
    },
  ]

  forwardingToLink(link: any) {
    window.open(link);
  }

}
