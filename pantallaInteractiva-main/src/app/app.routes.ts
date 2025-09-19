import { Routes } from '@angular/router';
import { Pantalla } from './pages/pantalla/pantalla';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/admin/login/login';
import { Cargarhorarios } from './pages/admin/cargarhorarios/cargarhorarios';
import { Publicacionavisos } from './pages/admin/publicacionavisos/publicacionavisos';

export const routes: Routes = [
    {path: '', component:Pantalla},
    {path: 'admin/login', component: Login},
    {path: 'admin', component:Admin, children:[
        {path: 'horarios', component: Cargarhorarios},
        {path: 'avisos', component: Publicacionavisos},
    ]},
    {path: '**', redirectTo: ''}
];
