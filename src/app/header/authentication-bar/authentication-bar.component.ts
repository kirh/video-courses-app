import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-authentication-bar',
  templateUrl: './authentication-bar.component.html',
  styleUrls: ['./authentication-bar.component.scss']
})
export class AuthenticationBarComponent implements OnInit {

  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
