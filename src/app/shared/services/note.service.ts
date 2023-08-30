import { Injectable } from '@angular/core';
import {Note} from "../models/note.model";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class NoteService extends DataService<Note>{

  constructor() {
    super();
    this.key = "notes";
    this.loadState();
    this.onLocalStorageDataChange();
  }

}
