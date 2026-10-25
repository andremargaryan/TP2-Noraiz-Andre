import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactData } from '../contact-data';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private data = inject(ContactData);

  form = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    age: [null as number | null],
    hide: [false],
    email: ['', [Validators.required, Validators.pattern(/@/)]],
    commentaire: ['', Validators.required],
  });

  constructor() {
    this.form.controls.hide.valueChanges.subscribe((hidden) => {
      const email = this.form.controls.email;
      if (hidden) {
        email.reset('');
        email.clearValidators();
      } else {
        email.setValidators([Validators.required, Validators.pattern(/@/)]);
      }
      email.updateValueAndValidity();
    });
  }

  envoyer() {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.data.dernier = {
      prenom: v.prenom!,
      nom: v.nom!,
      age: v.age,
      email: v.email ?? '',
      commentaire: v.commentaire!,
    };
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}