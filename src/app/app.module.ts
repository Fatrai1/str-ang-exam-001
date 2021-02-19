import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
const appRoutes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeroesComponent,
    FilterPipe,
    SorterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
