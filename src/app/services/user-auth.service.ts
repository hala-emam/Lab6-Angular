import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  // isUserLogged:boolean=false;
  private authsubject: BehaviorSubject<boolean> ;
  constructor() {
    this.authsubject = new BehaviorSubject<boolean>(false);
  }
  Login() {
    localStorage.setItem('token', 'hgkvj667sfdgdh127npm');
    this.authsubject.next(true)
  }
  Logout() {
    localStorage.removeItem('token');
    this.authsubject.next(false);
  }
  getUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authsubject;
  }
}
