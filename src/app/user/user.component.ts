import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users : User[];
  constructor(private UserListService : UserService) { }

  ngOnInit() {
    this.UserListService.getAll().subscribe(users => {
      this.users = users;
    });
  }
  

} 