import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg1FormComponent } from './reg1-form.component';

describe('Reg1FormComponent', () => {
  let component: Reg1FormComponent;
  let fixture: ComponentFixture<Reg1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reg1FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
