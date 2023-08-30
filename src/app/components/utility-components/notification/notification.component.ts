import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from "../../../shared/services/utility-service/notification.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {NotificationData} from "../../../shared/models/utility-model/notification-data.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
      trigger('notificationAnim',[
          transition(':enter',[
              style({
                opacity:0,
                bottom: 0
              }),
              animate('150ms 125ms ease-out')
          ]),
        transition(':leave',[
          animate(125,style({
            opacity:0,
            transform:'scale(0.85)'
          }))
        ])
      ])
  ]
})
export class NotificationComponent implements OnInit,OnDestroy{

  timeout:any;
  notifications!: NotificationData[] | null;
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.setNotificationText();
  }

  setNotificationText(){
    this.notificationService.notifications.subscribe((notificationData :NotificationData)=>{
      this.notifications = [notificationData]

      clearTimeout(this.timeout);

      this.timeout = setTimeout(()=>{
        this.notifications = null;
      },notificationData.duration)
    })
  }

    ngOnDestroy(): void {
      clearTimeout(this.timeout)
    }


}
