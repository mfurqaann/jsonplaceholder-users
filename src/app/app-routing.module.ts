import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-user', pathMatch: 'full' },
  {
    path: 'all-user',
    component: UserListComponent,
  },
  {
    path: 'all-user',
    children: [{ path: ':id', component: UserDetailsComponent }],
  },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
