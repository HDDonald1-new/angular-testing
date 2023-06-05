import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { PostResolver } from './services/post.resolver';

const routes: Routes = [
  {
    path: "",
    component: FeedComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
        post: PostResolver
    }
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
