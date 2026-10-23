import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Gif } from './gif/gif';

@Component({
  imports: [RouterOutlet, Header, Footer, Gif],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TP2-Noraiz-Andre');
}
