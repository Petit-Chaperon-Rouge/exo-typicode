import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {

  @Input() user!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  delete(user: User): void {
    this.userService.delUser(user).subscribe((resp) => {
      this.userService.refreshUsers();
      // this.userDelete.emit("userDelete");
    });
  }
}
