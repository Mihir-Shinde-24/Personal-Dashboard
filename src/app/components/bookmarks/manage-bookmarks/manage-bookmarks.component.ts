import {Component, OnInit} from '@angular/core';
import {Bookmark} from "../../../shared/models/bookmark.model";
import {BookmarkService} from "../../../shared/services/bookmark.service";
import {Router, Scroll} from "@angular/router";

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit{

  bookmarks!: Bookmark[];
  isBmSelected!:boolean;
  constructor(private bookmarkService:BookmarkService, private router: Router) {}

  ngOnInit(): void {
    this.getBookmarks();
    this.checkRoute();
  }

  checkRoute() {
    this.router.events.subscribe(val => {
      if (val instanceof Scroll) {
        this.isBmSelected = (val.routerEvent.url.includes('/bookmarks/manage')) && !(val.routerEvent.url.length === 17);
      }
    });

  }
  getBookmarks(){
    this.bookmarks = this.bookmarkService.getAll();
    console.log(this.bookmarks)
  }
}
