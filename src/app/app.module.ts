import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
// import { SidenavComponent } from './components/sidenav/sidenav.component';

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main.page/main.page.component';
import { MainNewsletterCardComponent } from './components/main.newsletter.card/main.newsletter.card.component';
import { MainContactsCardComponent } from './components/main.contacts.card/main.contacts.card.component';
import { NewsletterCreationCardComponent } from './components/newsletter.creation.card/newsletter.creation.card.component';
import { SelectRecipientsListComponent } from './components/select.recipients.list/select.recipients.list.component';
import { CsvLoaderCardComponent } from './components/csv.loader.card/csv.loader.card.component';
import { NewsletterTableComponent } from './components/newsletter.table/newsletter.table.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginComponent,
    FormsModule,
    HttpClientModule,
    // SidenavComponent,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, CommonModule, RouterModule,
    MainPageComponent,
    MainNewsletterCardComponent,
    MainContactsCardComponent,
    NewsletterCreationCardComponent,
    SelectRecipientsListComponent,
    CsvLoaderCardComponent,
    NewsletterTableComponent,

  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
