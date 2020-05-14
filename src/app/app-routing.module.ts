import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CategoriesComponent, StatsComponent, AboutComponent]