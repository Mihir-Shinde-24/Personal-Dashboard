import {Component, OnInit} from '@angular/core';
import {Bookmark} from "../../shared/models/bookmark.model";
import {BookmarkService} from "../../shared/services/bookmark.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements  OnInit{

  bookmarks!: Bookmark[];
  constructor(private bookmarkService:BookmarkService) {}

  ngOnInit(): void {
    this.getBookmarks();
  }

  getBookmarks(){
    this.bookmarks = this.bookmarkService.getAll();
    console.log(this.bookmarks)
  }




}
