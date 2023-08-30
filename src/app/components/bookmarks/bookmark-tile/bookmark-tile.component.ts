import {Component, Input} from '@angular/core';
import {Bookmark} from "../../../shared/models/bookmark.model";

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent {

  @Input('bookmark') bookmark!:Bookmark;
  faviconError=false;

  faviError() {
    this.faviconError = true;
  }
}
