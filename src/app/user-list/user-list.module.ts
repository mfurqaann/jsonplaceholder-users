import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { UserlistService } from './shared/userlist.service';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    RouterModule,
    ButtonModule,
    PanelModule,
    AvatarModule,
    ChipModule,
    CardModule,
    BadgeModule,
    TooltipModule,
    DividerModule,
  ],
  providers: [UserlistService],
})
export class UserListModule {}
