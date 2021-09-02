import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';
import { Post } from 'src/app/shared/models/post';
import { CommentService } from 'src/app/shared/services/comment.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;

  constructor(private postService: PostService, private commentService: CommentService) {}

  ngOnInit(): void {
    if (this.post) {
      this.commentService
        .getCommentsByPostId(this.post.id)
        .subscribe((comments: Comment[]) => {
          if (comments && comments.length) this.post.comments = comments;
        });
    }
  }

  delete(post: Post): void {
    this.postService.delPost(post).subscribe((resp) => {
      this.postService.refreshPosts();
    });
  }
}
