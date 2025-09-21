import { Routes } from '@angular/router';
import { CharacterList } from './pages/character-list/character-list';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: 'home'},
    {path: "home", component: CharacterList},

    //  {path: "character/:id", component: ""}, Desarrollo del ejercicio

    {path: "**", redirectTo: 'home'},
];
