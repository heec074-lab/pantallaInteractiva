import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      const {username, password} = this.loginForm.value;

      if(username == 'admin' && password == '1234'){
        localStorage.setItem('auth', 'true');
        this.router.navigate(['/admin']);
      } else {
        alert ('Credenciales inválidas');
      }
    }
  }
}
