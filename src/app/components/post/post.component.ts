import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostData } from '../../models/share.model';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  get title(): string {
    return this.postData?.post?.title
  }

  get body(): string {
    return this.postData?.post?.body
  }

  get author(): string {
    return `${this.postData?.user?.username} (${this.postData?.user?.name})`
  } 
  
  postData: PostData = null

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.postData = data.post
      }
    )
  }

  back(): void {
    this.router.navigate(['/'])
  }
}
