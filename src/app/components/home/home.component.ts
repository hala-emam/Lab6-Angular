import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //   subscribtion!:Subscription
  //  constructor(private _Notification:NotificationService){
  //  }
  //  ngOnInit(): void {
  //     //  this._Notification.getNotification().subscribe((notification)=>{
  //     //   notification
  //     //  },((error)=>{
  //     //   console.log(`${error}`)
  //     //  }))
  //     this.subscribtion=this._Notification.getNotification().subscribe({
  //       next:(notification)=>{
  //          console.log(notification)
  //       },
  //       error:(err)=>{ console.log("notification is empty")},
  //       complete:()=>{ console.log("notification successfully copmleted")},
  //     })
  //   }
  // ngOnDestroy(): void {
  // this.subscribtion.unsubscribe()
  // }
}
