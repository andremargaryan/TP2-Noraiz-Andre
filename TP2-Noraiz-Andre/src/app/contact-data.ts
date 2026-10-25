import { Injectable } from '@angular/core';

export interface ContactInfo {
  prenom: string;
  nom: string;
  age: number | null;
  email: string;
  commentaire: string;
}

@Injectable({ providedIn: 'root' })
export class ContactData {
  dernier: ContactInfo | null = null;
}