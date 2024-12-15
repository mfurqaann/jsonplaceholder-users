import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListModule } from './user-list/user-list.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserListModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
