import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification!: string[];
  constructor() {
    this.notification = [
      'You have unread messages',
      'People reacting to your post',
      'hala replyed to your comment',
      'Post shared successfully',
      'New notofication form sara',
    ];
  }

  getNotification(): Observable<string> {
    return from(this.notification);
    // return new Observable<string>((observor) => {
    //   // //to observe new update
    //   // observor.next()
    //   // //to observe exist error
    //   // observor.error()
    //   // //to observe no update occur
    //   // observor.complete()
    //   let count=0;
    //   let notificationInterval=setInterval(()=>{
    //     if(count==this.notification.length){
    //       observor.complete()
    //     }
    //     if(this.notification[count]==""){
    //       observor.error("This notification is empty")
    //     }
    //    observor.next(this.notification[count])
    //    count++;
    //   },2000)

    //   return {
    //     unsubscribe:()=>{
    //      clearInterval(notificationInterval)
    //     }
    //   }

    // });
  }
}
