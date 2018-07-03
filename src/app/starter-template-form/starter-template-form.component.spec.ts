import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterTemplateFormComponent } from './starter-template-form.component';

describe('StarterTemplateFormComponent', () => {
  let component: StarterTemplateFormComponent;
  let fixture: ComponentFixture<StarterTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
