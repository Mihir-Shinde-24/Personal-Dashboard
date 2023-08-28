import {Component, OnInit} from '@angular/core';
import {Bookmark} from "../../shared/models/bookmark.model";
import {DataService} from "../../shared/services/data.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements  OnInit{

  bookmarks!: Bookmark[];
  constructor(private bookmarkService:DataService<Bookmark>) {}

  ngOnInit(): void {
    this.getBookmarks();
  }

  getBookmarks(){
    // this.bookmarks = this.bookmarkService.getAll();
    this.bookmarks = [
      new Bookmark("Google","https://www.google.com"),
      new Bookmark("Wiki","https://www.wikipedia.org"),
      new Bookmark("YT","https://www.youtube.com"),
    ]
    console.log(this.bookmarks)
  }




}
