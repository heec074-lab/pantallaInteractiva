import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Reloj } from '../../services/reloj';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  currentTime: Date = new Date();

  constructor(private relojService: Reloj) {}

  ngOnInit(): void {
    this.relojService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
    });
  }
}
