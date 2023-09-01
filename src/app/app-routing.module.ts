import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {TodosComponent} from "./components/todos/todos.component";
import {NotesComponent} from "./components/notes/notes.component";
import {AddNotesComponent} from "./components/notes/add-notes/add-notes.component";
import {UnsavedChangesGuard} from "./shared/route-gaurds/unsaved-changes.guard";
import {AddTodoComponent} from "./components/todos/add-todo/add-todo.component";
import {AddBookmarkComponent} from "./components/bookmarks/add-bookmark/add-bookmark.component";
import {ManageBookmarksComponent} from "./components/bookmarks/manage-bookmarks/manage-bookmarks.component";

const routes: Routes = [
  {
    path: 'bookmarks',
    children:[
      {
        path: '',
        component: BookmarksComponent,
        data:{
          tab: 1
        }
      },
      {
        path: 'add',
        component: AddBookmarkComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
      {
        path: 'manage',
        children:[
          {
            path: '',
            component: ManageBookmarksComponent,
            children :[
              {
                path: ':bk-id',
                component: AddBookmarkComponent,
                canDeactivate:[UnsavedChangesGuard],
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path: 'todos',
    children:[
      {
        path: '',
        component: TodosComponent,
        data:{
          tab: 2
        }
      },
      {
        path: 'add',
        component: AddTodoComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
      {
        path: 'edit/:id',
        component: AddTodoComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
    ]
  },
  {
    path: 'notes',
    children:[
      {
        path: '',
        component: NotesComponent,
        data:{
          tab: 3
        }
      },
      {
        path: 'add',
        component: AddNotesComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
      {
        path: 'edit/:id',
        component: AddNotesComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
