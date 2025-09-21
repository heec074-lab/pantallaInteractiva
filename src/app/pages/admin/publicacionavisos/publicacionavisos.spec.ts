import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicacionavisos } from './publicacionavisos';

describe('Publicacionavisos', () => {
  let component: Publicacionavisos;
  let fixture: ComponentFixture<Publicacionavisos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicacionavisos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicacionavisos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
