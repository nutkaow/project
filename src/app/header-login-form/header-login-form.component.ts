import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header-login-form',
  templateUrl: './header-login-form.component.html',
  styleUrls: ['./header-login-form.component.scss']
})
export class HeaderLoginFormComponent implements OnInit {

  constructor(private myAwesomeService: UserService) { }

  ngOnInit() {
    console.log('Is user logged in ?',this.myAwesomeService.getUserLoggedIn());
    
  }

}
