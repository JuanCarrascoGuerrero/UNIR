import { RouterModule, Routes } from '@angular/router';
import { UserGrid } from './components/user-grid/user-grid';
import { DetailForm } from './components/detail-form/detail-form';
import { UserCard } from './components/user-card/user-card';

export const routes: Routes = [

    // Por defecto la vista con listado de user cards
    {path:'',pathMatch:'full', redirectTo: 'home'},  
    {path:'home',component: UserGrid}, 
    {path:'newuser',component: DetailForm},
    {path:'updateuser/:_id',component: DetailForm},
    {path:'user/:_id',component: UserCard},
];

