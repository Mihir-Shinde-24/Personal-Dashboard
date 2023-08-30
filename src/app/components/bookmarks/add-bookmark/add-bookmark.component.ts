import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Bookmark} from "../../../shared/models/bookmark.model";
import {IDeactivateComponent} from "../../../shared/interfaces/IDeactivateComponent";
import {BookmarkService} from "../../../shared/services/bookmark.service";
import {NotificationService} from "../../../shared/services/utility-service/notification.service";

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements IDeactivateComponent, OnInit {
  id!: string;
  addBookmarkReactiveForm!: FormGroup;

  constructor(private notificationService:NotificationService, private fb: FormBuilder, private bookmarkService: BookmarkService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchRouteParam();
  }

  initializeForm() {
    this.addBookmarkReactiveForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control(''),
      url: this.fb.control('', [Validators.required])
    })
  }

  fetchRouteParam() {
    this.activatedRoute.params.subscribe(param => {
      if (param['bk-id']) {
        console.log(param['bk-id']);
        this.id = param['bk-id'];
        this.patchBookmarkForm(param['bk-id']);
      }
    })
  }

  patchBookmarkForm(id: string) {
    const bookmark = this.bookmarkService.get(id);
    if (bookmark) {
      this.addBookmarkReactiveForm.setValue(bookmark);
    } else {
      this.router.navigateByUrl('/bookmarks');
    }
  }


  onFormSubmit() {
    this.addBookmarkReactiveForm.markAllAsTouched();
    if (this.addBookmarkReactiveForm.valid) {
      if (!this.id) {
        const bookmark = new Bookmark(this.addBookmarkReactiveForm.value.name, this.addBookmarkReactiveForm.value.url);
        console.log(bookmark);
        this.bookmarkService.add(bookmark);
        this.router.navigateByUrl('/bookmarks');
        this.addBookmarkReactiveForm.reset();
        this.notificationService.show("New Bookmark added!")
      } else {
        this.bookmarkService.update(this.id, this.addBookmarkReactiveForm.value);
        this.notificationService.show("Bookmark updated!")
      }

    }
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.addBookmarkReactiveForm.touched) return true;
    if (this.nameControl?.value || this.urlControl?.value) {
      return confirm("You can unsaved changes. Do you want to discard changes?")
    }
    return true;
  }

  get idControl() {
    return this.addBookmarkReactiveForm.get('id')
  };

  get nameControl() {
    return this.addBookmarkReactiveForm.get('name')
  };

  get urlControl() {
    return this.addBookmarkReactiveForm.get('url')
  };


  deleteBookmark() {
    this.bookmarkService.delete(this.id);
    this.addBookmarkReactiveForm.reset();
    this.router.navigateByUrl('/bookmarks/manage');
    this.notificationService.show("Deleted bookmark!")
  }
}
