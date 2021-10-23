import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempleteComponent } from './pages/templete/templete.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  {path: 'templete' , component: TempleteComponent},
  {path: 'reactivo' , component: ReactiveComponent},
  {path: '**' , pathMatch: 'full' , redirectTo: 'templete'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
