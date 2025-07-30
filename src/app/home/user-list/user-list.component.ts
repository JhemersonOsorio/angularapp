import { Component, OnInit } from '@angular/core';
import { DummyResponse } from '../../model/dummy_response';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  total = 0;
  limit = 10;
  skip = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(this.limit, this.skip).subscribe(res => {
      this.users = res.users;
      this.total = res.total;
    });
  }

nextPage() {
  if (this.skip + this.limit < this.total) {
    this.skip += this.limit;
    this.getUsers();
  }
}

prevPage() {
  if (this.skip - this.limit >= 0) {
    this.skip -= this.limit;
    this.getUsers();
  }
}
}
