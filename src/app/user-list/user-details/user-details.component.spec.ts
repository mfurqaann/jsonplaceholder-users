import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { UserlistService } from '../shared/userlist.service';
import { User } from '../shared/userlist.model';
import { of } from 'rxjs';

const mockActivatedRoute = {
  params: of({ id: 5 }),
};

const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userlistServiceSpy: jasmine.SpyObj<UserlistService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserlistService', ['fetchDetailUsers']);

    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: UserlistService, useValue: spy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    userlistServiceSpy = TestBed.inject(
      UserlistService
    ) as jasmine.SpyObj<UserlistService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchUsersDetail if id is valid', () => {
    const user: User = {
      id: 5,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    };

    userlistServiceSpy.fetchDetailUsers.and.returnValue(of(user));

    component.ngOnInit();

    expect(component.id).toEqual(5);
    expect(component.user).toEqual(user);
    expect(component.isLoading).toBeFalse();
    expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
  });
});
