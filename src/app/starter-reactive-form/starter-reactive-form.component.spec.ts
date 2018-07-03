import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterReactiveFormComponent } from './starter-reactive-form.component';

describe('StarterReactiveFormComponent', () => {
  let component: StarterReactiveFormComponent;
  let fixture: ComponentFixture<StarterReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
