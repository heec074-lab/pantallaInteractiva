import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cargarhorarios } from './cargarhorarios';

describe('Cargarhorarios', () => {
  let component: Cargarhorarios;
  let fixture: ComponentFixture<Cargarhorarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cargarhorarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cargarhorarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
