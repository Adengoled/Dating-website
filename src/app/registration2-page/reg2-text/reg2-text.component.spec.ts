import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg2TextComponent } from './reg2-text.component';

describe('Reg2TextComponent', () => {
  let component: Reg2TextComponent;
  let fixture: ComponentFixture<Reg2TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reg2TextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg2TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
