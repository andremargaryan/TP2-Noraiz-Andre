import { Routes } from '@angular/router';
import { Gif } from './gif/gif';
import { Liste } from './liste/liste';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Gif },
  { path: 'liste', component: Liste },
  // ajoute ici contact et gestion plus tard
  { path: '**', redirectTo: 'accueil' },
];