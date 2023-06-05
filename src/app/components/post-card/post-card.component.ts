import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post = null
  @Output() showCard: EventEmitter<number> = new EventEmitter()

  get title(): string {
    return this.post?.title
  }

  get body(): string {
    return this.post?.body
  }

  constructor() { }

  ngOnInit(): void { }

  goToPost(): void {
    this.showCard.emit(this.post?.id)
  }
}
