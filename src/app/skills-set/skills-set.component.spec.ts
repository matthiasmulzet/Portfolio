import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSetComponent } from './skills-set.component';

describe('SkillsSetComponent', () => {
  let component: SkillsSetComponent;
  let fixture: ComponentFixture<SkillsSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
