import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './post-list/post-add/post-add.component';
import { PostDetailComponent } from './post-list/post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserAddComponent } from './user-list/user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'users',
    children: [
      { path: '', component: UserListComponent, pathMatch: 'full' },
      { path: 'add', component: UserAddComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'posts',
    children: [
      { path: '', component: PostListComponent, pathMatch: 'full' },
      { path: 'add', component: PostAddComponent, pathMatch: 'full' },
      { path: ':id', component: PostDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
