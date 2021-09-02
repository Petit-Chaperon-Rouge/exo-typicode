import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { PostDetailComponent } from './post-list/post-detail/post-detail.component';
import { UserAddComponent } from './user-list/user-add/user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostAddComponent } from './post-list/post-add/post-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    PostListComponent,
    PostCardComponent,
    PostDetailComponent,
    UserAddComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
