import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { GetPostsAction } from 'root-store/actions'
import { selectPosts } from 'root-store/selectors'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { CoreService } from '../../services/core/core.service'

@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts: Post[] = null
  posts$: Observable<Post[]>
  subtractData: number

  constructor(private core: CoreService, private router: Router, private store$: Store) {
    this.posts$ = store$.select(selectPosts)
  }

  ngOnInit(): void {
    this.store$.dispatch(GetPostsAction())
    
    this.core.asyncSubtract(1, 2).then((v) => (this.subtractData = v))
  }

  onShowCard(id: number): void {
    this.router.navigate(['/posts', id])
  }
}
