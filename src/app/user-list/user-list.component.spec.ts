import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { UserListComponent } from './user-list.component';
import { UserlistService } from './shared/userlist.service';
import { User } from './shared/userlist.model';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userListServiceSpy: jasmine.SpyObj<UserlistService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserlistService', ['fetchUsers']);

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserlistService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userListServiceSpy = TestBed.inject(
      UserlistService
    ) as jasmine.SpyObj<UserlistService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchUsers when on init', () => {
    const mockUsers: User[] = [
      {
        id: 2,
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
      },
    ];
    userListServiceSpy.fetchUsers.and.returnValue(of(mockUsers));

    component.ngOnInit();

    expect(userListServiceSpy.fetchUsers).toHaveBeenCalled();
    expect(component.userList).toEqual(mockUsers);
    expect(component.isLoading).toBeFalse();
  });

  it('should handle error when fetchUsers fails', () => {
    const errorResponse = new Error('Failed to fetch users');
    userListServiceSpy.fetchUsers.and.returnValue(
      throwError(() => errorResponse)
    );

    component.ngOnInit();

    expect(userListServiceSpy.fetchUsers).toHaveBeenCalled();
    expect(component.userList).toEqual([]);
    expect(component.isLoading).toBeFalse();
  });
});
