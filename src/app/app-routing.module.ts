import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardGuard} from '../app/auth-guard.guard'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    canActivate: [AuthGuardGuard],
    path: 'recipes',
    loadChildren: './pages/recipes/recipes.module#RecipesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
