import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer, MatDrawerContainer, MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    StudentsComponent,
    PaymentsComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatDivider
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
