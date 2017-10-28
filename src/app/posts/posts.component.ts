import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { CommentsService } from '../comments.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostService, CommentsService]
})
export class PostsComponent implements OnInit {
  
  comments: Array<any> = [];
  posts:any;

  constructor( 
    private route: ActivatedRoute,
    private p: PostService,
    private c: CommentsService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      

      //estos son los posts
      this.p.getPost(id).subscribe(
          r => this.posts = r,
          error => console.error('Error: ' + error)
      );

      //estos son los comentarios
      this.c.getCommentsByPostId(id).subscribe(
          r => this.comments = r,
          error => console.error('Error: ' + error)
      );

  });

}



  }
  export interface Post {
    id: number;
    title: string;
    body: string;
}


