import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogOpenedComponent } from './blog-opened/blog-opened.component';
import { SolutionComponent } from './solution/solution.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsandcondComponent } from './termsandcond/termsandcond.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact-us', component: ContactusComponent},
  {path: 'about-us', component: AboutusComponent},
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'blogs', component: BlogsComponent },
  {path: 'blog-opened', component: BlogOpenedComponent },
  {path: 'solution', component: SolutionComponent},
  {path: 'terms-and-conditions', component: TermsandcondComponent},
  {path: 'privacy-policy', component: PrivacypolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
