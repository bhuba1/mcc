import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CategoriesComponent, StatsComponent, AboutComponent]