import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Asignatura {
  id_asignatura: number;
  sigla: string;
  nombre: string; 
}

@Injectable({
  providedIn: 'root'
})
export class Mostrarhorario {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/asignaturas'

  getHorarios(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.apiUrl);
  }
}
