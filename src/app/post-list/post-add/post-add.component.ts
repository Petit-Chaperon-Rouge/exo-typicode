import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      body: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      user: new FormControl(1, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  addPost(): void {
    console.log(this.postForm);

    if (this.postForm.status === 'VALID') {
    this.postService
        .postPost(this.postForm.value)
        .subscribe((newPost: Post) => {
          console.log(newPost);
          this.postForm.reset();
        });
    }
  }
}
