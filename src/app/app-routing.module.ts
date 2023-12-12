import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
// import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainPageComponent } from './components/main.page/main.page.component';
import { NewsletterCreationCardComponent } from './components/newsletter.creation.card/newsletter.creation.card.component';
import { CsvLoaderCardComponent } from './components/csv.loader.card/csv.loader.card.component';

const routes: Routes = [
  {
    path: 'loadcsv',
    component: CsvLoaderCardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'newsletter',
    component: NewsletterCreationCardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    component: MainPageComponent,
    // canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
