import { Routes } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';

export const routes: Routes = [
    {
        path: '',
        component: UserCardComponent,
        pathMatch: 'full',
      },
];
