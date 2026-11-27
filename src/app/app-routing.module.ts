import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { AboutComponent } from './components/about/about.component'; // 1. Importe aqui
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'; // ◄── Importe
import { NotFoundComponent } from './components/not-found/not-found.component'; // ◄── Importe

const routes: Routes = [
  { path: '', redirectTo: '/herois', pathMatch: 'full' },
  { path: 'herois', component: HeroListComponent },
  { path: 'herois/:id', component: HeroDetailComponent },
  { path: 'sobre', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

