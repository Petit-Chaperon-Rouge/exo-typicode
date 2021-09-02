import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/shared/models/comment';
import { Post } from 'src/app/shared/models/post';
import { CommentService } from 'src/app/shared/services/comment.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  id!: number;
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    
    this.postService.getPostById(this.id).subscribe((post: Post) => {
      this.post = post;
      

    this.commentService
      .getCommentsByPostId(this.id)
      .subscribe((comments: Comment[]) => {
        this.post.comments = comments;
      });
    });
  }
}
