import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {NotificationData} from "../../models/utility-model/notification-data.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$ :Subject<NotificationData> = new Subject<NotificationData>();
  constructor() { }

  show(text:string,duration?:number){
    this.notification$.next(new NotificationData(text,duration));
  }

  get notifications(){
    return this.notification$.asObservable();
  }

}
