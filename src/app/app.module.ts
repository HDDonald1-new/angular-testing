import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FeedComponent } from './components/feed/feed.component'
import { PostComponent } from './components/post/post.component'
import { AboutComponent } from './components/about/about.component'
import { PostCardComponent } from './components/post-card/post-card.component'
import { CoreService } from './services/core/core.service'
import { ReversePipe } from './pipes/reverse.pipe'
import { RootStoreModule } from 'root-store/root-store.module'

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    AboutComponent,
    PostCardComponent,
    ReversePipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, RootStoreModule],
  providers: [CoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
