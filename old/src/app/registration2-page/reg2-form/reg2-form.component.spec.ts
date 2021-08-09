import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg2FormComponent } from './reg2-form.component';

describe('Reg2FormComponent', () => {
  let component: Reg2FormComponent;
  let fixture: ComponentFixture<Reg2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reg2FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
