import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  subscribtion!: Subscription;
  notifications: any[] = [];
  isUserAuth!: boolean;
  constructor(
    private _Notification: NotificationService,
    private userAuthSer: UserAuthService
  ) {}

  ngOnInit(): void {
    this.subscribtion = this._Notification.getNotification().subscribe({
      next: (notification) => {
        this.notifications.push(notification); // Push notification to the array
      },
      error: (err) => {
        console.log('Error fetching notifications:', err);
      },
    });
    //login compnent
    // this.isUserAuth=this.userAuthSer.getUserLogged()

    this.userAuthSer.getAuthSubject().subscribe({
      next: (status) => {
        this.isUserAuth = status;
      },
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    this.subscribtion.unsubscribe();
  }
}
