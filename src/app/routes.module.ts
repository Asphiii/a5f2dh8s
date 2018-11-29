import { Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';

export const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  { path: '**', component: HomepageComponent }
];
