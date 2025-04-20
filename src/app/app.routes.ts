import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  { path: 'accueil', component: MainContentComponent },
  { path: 'reservation', component: BookingComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
