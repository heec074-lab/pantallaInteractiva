import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Pantalla Interactiva');
  isAdminRoute = signal(false);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const rawUrl = event.urlAfterRedirects ?? event.url ?? '';
        const path = rawUrl.split('?')[0].split('#')[0];
        const admin = path === '/admin' || path.startsWith('/admin/');
        this.isAdminRoute.set(admin);
        console.log('[Router DEBUG] rawUrl=', rawUrl, '-> path=', path, 'admin=', admin);
      });
  }
}