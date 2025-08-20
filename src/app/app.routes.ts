import { Routes } from '@angular/router';
import { Pantalla } from './pages/pantalla/pantalla';

export const routes: Routes = [
    {path: '', component:Pantalla},
    {path: '**', redirectTo: ''}
];
