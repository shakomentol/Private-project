import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimationPageComponent } from './components/animation-page/animation-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: 'menu', component: MenuPageComponent },
  { path: 'animation', component: AnimationPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule], // Don't forget to export RouterModule
})
export class AppRoutingModule {}
