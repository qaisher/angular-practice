import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  //{path: '', redirectTo:'/mens', pathMatch:'full'},
  {path: 'mens', component: MensComponent},
  {path: 'womens', component: WomensComponent},
  {path: 'womens/:idd', component: ProductDetailComponent},
  {path: 'mens/:idd', component: ProductDetailComponent}, // : colon indicates that :idd is a placeholder for a specific hero id
  //{path: 'womens/:idd', component: ProductDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
