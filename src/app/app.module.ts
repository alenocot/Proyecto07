import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './pages/main/main.component';
import { ReportComponent } from './pages/report/report.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';

import {MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
/*import { MatButtonModule } from '@angular/material/button';*/

const routes: Routes = [
    {path: "main", component: MainComponent },
    {path: "about", component: AboutComponent },
    {path: "report", component: ReportComponent },
    {path: " ", redirectTo: '/main', pathMatch: 'full' },
    {path: "**", redirectTo: "main" }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReportComponent,
    AboutComponent,
    MenuComponent    
  ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,   
    BrowserAnimationsModule, 
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
