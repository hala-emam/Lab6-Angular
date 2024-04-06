import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  isUserAuth:boolean;
  constructor(private userAuthSer:UserAuthService){
  this.isUserAuth=this.userAuthSer.getUserLogged()
  }

  login(){
  this.userAuthSer.Login();
  this.isUserAuth=this.userAuthSer.getUserLogged()
  }
  logout(){
    this.userAuthSer.Logout();
    this.isUserAuth=this.userAuthSer.getUserLogged()
  }


}
