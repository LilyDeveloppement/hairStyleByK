import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routes: Routes = [  { path: 'accueil', component: MainContentComponent},{ path: '',   redirectTo: '/accueil', pathMatch: 'full'}];
