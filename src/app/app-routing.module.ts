import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimationPageComponent } from './components/animation-page/animation-page.component';

const routes: Routes = [
  { path: 'animation', component: AnimationPageComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule], // Don't forget to export RouterModule
})
export class AppRoutingModule {}
