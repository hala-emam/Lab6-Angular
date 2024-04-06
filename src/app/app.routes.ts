import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
export const routes: Routes = [
  {path:"", redirectTo:"Home",pathMatch:"full"},
  {path:"Home" ,component:HomeComponent},
  {path:"Login" ,component:LoginComponent},
  {path:"About" ,component: AboutUsComponent},
  {path:"Contact" ,component: ContactUsComponent},

  {path:"Products" ,component: ProductComponent, canActivate:[authGuard]},
  {path:"AddProduct/:id", component: AddProductComponent},
  {path:"AddProduct" ,component: AddProductComponent},
  {path:"products/:id",component:DetailsComponent},
  {path:"**",component:NotFoundComponent}


];
