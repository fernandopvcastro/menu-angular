import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UsersGridComponent } from './pages/users-grid/users-grid.component';

import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    OrganizationComponent,
    ContactComponent,
    UsersGridComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
