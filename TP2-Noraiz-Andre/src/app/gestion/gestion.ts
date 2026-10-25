import { Component, inject } from '@angular/core';
import { ContactData } from '../contact-data';
import { NotFound } from '../not-found/not-found';

@Component({
  imports: [NotFound],
  selector: 'app-gestion',
  styleUrl: './gestion.css',
  templateUrl: './gestion.html',
})
export class Gestion {
  data = inject(ContactData);
}
