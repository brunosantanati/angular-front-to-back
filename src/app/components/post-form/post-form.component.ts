import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
      alert('Please add post')
    }else{
      console.log(title, body);
      this.postService.savePost({title, body} as Post).subscribe(
        post => {
          console.log(post);
          this.newPost.emit(post);
        }
      )
    }
  }

}
