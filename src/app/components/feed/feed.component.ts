import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { GetPostsAction } from 'root-store/actions'
import { selectPosts } from 'root-store/selectors'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { CoreService } from '../../services/core/core.service'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts: Post[] = null
  posts$: Observable<Post[]>
  subtractData: number

  unsafeUrl = 'javascript:alert("script")'// blocked by default as xss
  trustedUrl

  constructor(private core: CoreService, private router: Router, private store$: Store, private sanitizer: DomSanitizer) {
    this.posts$ = store$.select(selectPosts)
    this.trustedUrl = this.sanitizer.bypassSecurityTrustHtml(this.unsafeUrl)//can be called on HTML, STYLES, URL etc
  }

  ngOnInit(): void {
    this.store$.dispatch(GetPostsAction())
    
    this.core.asyncSubtract(1, 2).then((v) => (this.subtractData = v))
  }

  onShowCard(id: number): void {
    this.router.navigate(['/posts', id])
  }
}
