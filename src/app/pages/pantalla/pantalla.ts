import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-pantalla',
  imports: [CommonModule],
  templateUrl: './pantalla.html',
  standalone: true, 
  styleUrl: './pantalla.css'
})

export class Pantalla implements OnInit {
  clases = [
    { profesor: 'Juan Pérez', asignatura: 'Programación Web', sala: 'A101', hora: '08:00 - 10:00' },
    { profesor: 'Ana Gómez', asignatura: 'Bases de Datos', sala: 'B202', hora: '10:00 - 12:00' },
    { profesor: 'Luis Ramírez', asignatura: 'Big Data', sala: 'C303', hora: '12:00 - 14:00' },
  ];
   constructor() { }

  ngOnInit(): void { }

}


