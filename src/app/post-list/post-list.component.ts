import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../shared/models/post';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSub?: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsSub = this.postService.postsObs.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.getPosts();
  }

  ngOnDestroy(): void {
    if (this.postsSub) {
      // désinscription à l'opbservable (libération des ressources)
      this.postsSub.unsubscribe();
    }

  }

  getPosts() {
    this.postService.refreshPosts();
  }

}
