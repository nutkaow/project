import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  data = [] ;
  constructor(private router:Router , private user:UserService) { }

  ngOnInit() {
  }

  _loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = this.data[0];
    var password = this.data[1];    
    if(username == 'admin' && password == 'admin'){ // query all id here
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }
}
