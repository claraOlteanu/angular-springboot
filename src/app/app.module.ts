import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
  { path: 'first-component', component: FirstComponentComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
