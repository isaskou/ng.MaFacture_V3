import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './_components/protected/app-main/app-main.component';
import { DashboardComponent } from './_components/protected/dashboard/dashboard.component';
import { HomeComponent } from './_components/public/home/home.component';
import { LoginComponent } from './_components/public/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {path:'dashboard', component:AppMainComponent},
  {path:'caisse', component:AppMainComponent},
  {path:'facture', component:AppMainComponent},
  {path:'produit', component:AppMainComponent},
  {path:'client', component:AppMainComponent},
  {path:'fournisseur', component:AppMainComponent},
  {path:'parametre', component:AppMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
