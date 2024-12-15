import { Component, OnInit } from '@angular/core';
import { UserlistService } from './shared/userlist.service';
import { User } from './shared/userlist.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userListService: UserlistService) {}

  userList: Array<User> = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.isLoading = true;
    this.userListService
      .fetchUsers()
      .pipe(
        catchError((error) => {
          console.error('Error fetching users:', error);
          this.isLoading = false;
          return of([]);
        })
      )
      .subscribe((response) => {
        this.userList = response;
        this.isLoading = false;
        console.log(this.userList);
      });
  }
}
