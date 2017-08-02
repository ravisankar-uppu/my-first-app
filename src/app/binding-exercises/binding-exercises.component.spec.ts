import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExercisesComponent } from './binding-exercises.component';

describe('BindingExercisesComponent', () => {
  let component: BindingExercisesComponent;
  let fixture: ComponentFixture<BindingExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
