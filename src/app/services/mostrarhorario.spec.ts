import { TestBed } from '@angular/core/testing';

import { Mostrarhorario } from './mostrarhorario';

describe('Mostrarhorario', () => {
  let service: Mostrarhorario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mostrarhorario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
