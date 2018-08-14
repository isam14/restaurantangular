import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(public loginService: LoginService) { }

  onSubmit() {
    console.log(this.username);
    this.loginService.connexion(this.username, this.password)
      
  }


  ngOnInit() {

  }

}
