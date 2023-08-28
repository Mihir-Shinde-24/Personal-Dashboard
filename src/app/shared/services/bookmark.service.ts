import { Injectable } from '@angular/core';
import {Bookmark} from "../models/bookmark.model";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks!: Bookmark[];
  constructor() { }

  getBookmarks():Bookmark[]{
    return this.bookmarks;
  }

  getBookmark(id:string){
    return this.bookmarks.find(b => id === b.id);
  }

  addBookmark(bookmark: Bookmark){
    this.bookmarks.push(bookmark);
  }

  updateBookmark(id:string, updatedFields: Partial<Bookmark>){
    const bookmark = this.getBookmark(id);
    if(bookmark){
      Object.assign(bookmark,updatedFields);
    }
  }

  deleteBookmark(id:string){
    const bookmarkIndex = this.bookmarks.findIndex(b=> b.id===id);
    if(bookmarkIndex == -1) return;
    this.bookmarks.splice(bookmarkIndex,1);
  }

}
