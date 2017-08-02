import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructAttrDirectivesComponent } from './struct-attr-directives.component';

describe('StructAttrDirectivesComponent', () => {
  let component: StructAttrDirectivesComponent;
  let fixture: ComponentFixture<StructAttrDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructAttrDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructAttrDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
