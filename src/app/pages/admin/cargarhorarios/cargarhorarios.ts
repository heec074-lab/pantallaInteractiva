import { Component } from '@angular/core';

@Component({
  selector: 'app-cargarhorarios',
  imports: [],
  templateUrl: './cargarhorarios.html',
  styleUrl: './cargarhorarios.css'
})
export class Cargarhorarios {
    selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload() {
    if (this.selectedFile) {
      console.log("Archivo subido:", this.selectedFile.name);
      // Aquí luego vas a manejar la lógica de enviar a backend
    }
  }
}

