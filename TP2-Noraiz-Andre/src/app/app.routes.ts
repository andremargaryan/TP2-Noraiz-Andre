import { Routes } from '@angular/router';
import { Gif } from './gif/gif';

export const routes: Routes = [
    { path: '', component: Gif},
    { path: 'accueil', component: Gif}
];
