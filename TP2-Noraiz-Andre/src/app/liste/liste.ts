import { Component, signal } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  films: Film[] = [
    { titre: 'Inception', affiche: 'inception.jpg' },
    { titre: 'Interstellar', affiche: 'interstellar.jpg' },
    { titre: 'Le Parrain', affiche: 'parrain.jpg' },
    { titre: 'Fight Club', affiche: 'fightclub.jpg' },
    { titre: 'Gladiator', affiche: 'gladiator.jpg' },
  ];

  filmSelectionne = signal<Film | null>(null);

  choisir(film: Film) {
    this.filmSelectionne.set(film);
  }
}