import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    country: new FormControl(
      { value: 'France', disabled: true },
      Validators.required
    ),
    phone: new FormControl('', Validators.required),
    preFixTel: new FormControl(
      { value: 'FR +33', disabled: true },
      Validators.required
    ),
  });

  onSubmit() {
    console.log('Réservation soumise:', this.profileForm.value);
  }
}
