import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersGridComponent } from './pages/users-grid/users-grid.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'users', component: UsersGridComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: OrganizationComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
