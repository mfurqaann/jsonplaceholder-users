import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        },
      },
    ];
  }
}
