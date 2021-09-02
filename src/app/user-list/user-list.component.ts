import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  usersSub?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.usersSub = this.userService.usersObs.subscribe((users: User[]) => {
      this.users = users;
    });
    this.getUsers();
  }

  // destructeur du composant
  ngOnDestroy() {
    if (this.usersSub) {
      // désinscription à l'opbservable (libération des ressources)
      this.usersSub.unsubscribe();
    }
  }

  getUsers() {
    // this.userService.getUsers().subscribe((users:User[])=>{
    //   this.users = users;
    // })
    this.userService.refreshUsers();
  }
}
