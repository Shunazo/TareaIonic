import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'suma',
    loadComponent: () => import('./pages/suma/suma.page').then( m => m.SumaPage)
  },
  {
    path: 'tabla',
    loadComponent: () => import('./pages/tabla/tabla.page').then( m => m.TablaPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experiencia/experiencia.page').then( m => m.ExperienciaPage)
  },
  {
    path: 'traductor',
    loadComponent: () => import('./pages/traductor/traductor.page').then( m => m.TraductorPage)
  },
];
