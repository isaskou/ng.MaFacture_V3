import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/_services/user-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showUser: boolean;

  constructor(
    public userService: UserLoginService
  ) { }

  ngOnInit(): void {
  }

}
