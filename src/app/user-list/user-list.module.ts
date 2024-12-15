import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { UserlistService } from './shared/userlist.service';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, HttpClientModule, TableModule],
  providers: [UserlistService],
})
export class UserListModule {}
