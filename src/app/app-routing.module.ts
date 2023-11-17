import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { EcommerceComponent } from './shopping-cart/ecommerce/ecommerce.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'authentification/login', component: LoginComponent },
  { path: 'shopping-cart/ecommerce', component: EcommerceComponent },
  { path: 'components/contact', component: ContactComponent },
  { path: 'components/about', component: AboutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
