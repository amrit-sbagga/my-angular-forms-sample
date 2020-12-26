import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormTemplateComponent } from './employee-form-template.component';

describe('EmployeeFormTemplateComponent', () => {
  let component: EmployeeFormTemplateComponent;
  let fixture: ComponentFixture<EmployeeFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
