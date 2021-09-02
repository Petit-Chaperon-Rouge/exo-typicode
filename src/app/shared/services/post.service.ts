import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(
    <Post[]>[]
  );
  // Création d'un observable à partir du behavior subject
  postsObs: Observable<Post[]> = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {}

  refreshPosts(): void {
    this.http
      .get<Post[]>(`${environment.typicode_url}/posts`)
      .subscribe((posts: Post[]) => {
        // Changement de la valeur portée par le subject
        this.postsSubject.next(posts);
      });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.typicode_url}/posts`);
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${environment.typicode_url}/posts/${postId}`);
  }

  postPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.typicode_url}/posts`, post);
  }

  delPost(post: Post): Observable<any> {
    return this.http.delete(`${environment.typicode_url}/posts/${post.id}`);
  }
}
