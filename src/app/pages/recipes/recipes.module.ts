import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  declarations: [RecipesPageComponent]
})
export class RecipesModule { }
