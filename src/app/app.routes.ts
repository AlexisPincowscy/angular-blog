import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'contents/:id',
        loadComponent: () => import('./pages/contents/contents').then(m => m.Contents),
    },
    {path: '**', redirectTo: ''}
];
