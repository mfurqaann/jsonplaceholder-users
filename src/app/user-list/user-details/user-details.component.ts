import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../shared/userlist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../shared/userlist.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: number = 0;
  user: User;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userListService: UserlistService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('User Detail');
    this.route.params.subscribe((params: Params) => {
      if (+params['id'] && +params['id'] <= 10) {
        this.id = +params['id'];
      } else {
        this.router.navigateByUrl('not-found');
      }
    });

    this.fetchUserDetail(this.id);
  }

  fetchUserDetail(id: number): void {
    this.isLoading = true;
    this.userListService.fetchDetailUsers(id).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
