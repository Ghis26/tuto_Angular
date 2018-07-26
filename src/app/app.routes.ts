import { Routes } from '../../node_modules/@angular/router';
import { RacesComponent } from './races/races.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'races', component: RacesComponent}
];
