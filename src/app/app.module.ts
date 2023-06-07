import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UsersGridComponent } from './pages/users-grid/users-grid.component';

import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    OrganizationComponent,
    ContactComponent,
    UsersGridComponent,
    NavbarComponent,
    LayoutComponent,
    TablePaginationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
