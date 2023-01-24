import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-set',
  templateUrl: './skills-set.component.html',
  styleUrls: ['./skills-set.component.scss']
})
export class SkillsSetComponent {
  constructor(public translate: TranslateService) { }

}
