import { Injectable } from '@angular/core';
import {Bookmark} from "../models/bookmark.model";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService extends DataService<Bookmark>{

  constructor() {
    super();
    this.key = "bookmarks";
    this.loadState();
    this.onLocalStorageDataChange();
  }
}
