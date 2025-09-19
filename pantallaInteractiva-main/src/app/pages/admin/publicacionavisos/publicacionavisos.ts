import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-publicacionavisos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './publicacionavisos.html',
  styleUrl: './publicacionavisos.css'
})
export class Publicacionavisos {
  avisosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.avisosForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.avisosForm.valid) {
      console.log('Aviso publicado:', this.avisosForm.value);
      alert('Aviso publicado correctamente');
      this.avisosForm.reset();
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
