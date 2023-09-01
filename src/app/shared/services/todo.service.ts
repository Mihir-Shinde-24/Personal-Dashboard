import { Injectable } from '@angular/core';
import {Todo} from "../models/todo.model";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService extends DataService<Todo>{

  constructor() {
    super();
    this.key = "todos";
    this.loadState();
    this.onLocalStorageDataChange();
  }

}
