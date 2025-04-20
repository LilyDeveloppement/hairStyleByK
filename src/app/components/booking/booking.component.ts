import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  /*   profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl(
      { value: 'France', disabled: true },
      Validators.required
    ),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^(33|0)(6|7|9)\\d{8}$'),
    ]),
    preFixTel: new FormControl(
      { value: 'FR +33', disabled: true },
      Validators.required
    ),
  }); */

  ngOnInit() {
    // On attend que le script Calendly soit chargé
    const initCalendly = () => {
      if (
        typeof Calendly !== 'undefined' &&
        this.container && this.container.nativeElement
      ) {
        Calendly.initInlineWidget({
          url: environment.calendlyUrl,
          parentElement: this.container.nativeElement,
        });
      } else {
        setTimeout(initCalendly, 100);
      }
    };

    initCalendly();
  }

  /*   onSubmit() {
    if (this.profileForm.valid) {
      console.log('Réservation soumise:', this.profileForm.value);
      // Vous pouvez ajouter ici la logique pour envoyer les données au backend
    } else {
      Object.keys(this.profileForm.controls).forEach((key) => {
        const control = this.profileForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  } */
}
