import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Gestion } from './gestion/gestion';
import { Gif } from './gif/gif';
import { Liste } from './liste/liste';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Gif },
  { path: 'liste', component: Liste },
  { path: 'contact', component: Contact },
  { path: 'gestion', component: Gestion },
{ path: 'contact', component: Contact },
  // ajoute ici contact et gestion plus tard
  { path: '**', redirectTo: 'accueil' },

];