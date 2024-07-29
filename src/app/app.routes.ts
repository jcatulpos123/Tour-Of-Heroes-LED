import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

//path = A string that matches the URL in the browser address bar.
//component = The component that the router should create when navigating to this route.

export const routes: Routes = [
  { path : '', redirectTo: '/dashboard', pathMatch: 'full' }, //default
  { path : 'heroes', component : HeroesComponent },
  { path : 'logs', component : MessagesComponent},
  { path : 'dashboard', component : DashboardComponent },
  { path : 'detail/:id', component : HeroDetailComponent}

];
