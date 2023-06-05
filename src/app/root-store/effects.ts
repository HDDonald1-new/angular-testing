import { Injectable } from "@angular/core";
import { CoreService } from "services/core/core.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { GetPostAction, GetPostDataAction, GetPostsAction, GetUserAction, SetPostAction, SetPostDataAction, SetPostsAction, SetUserAction } from "./actions";
import { map, switchMap } from "rxjs/operators";

@Injectable()
export class RootEffects {
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(GetPostsAction),
        switchMap(() => this.coreService.getPosts().pipe(
            map((posts) => SetPostsAction({posts}))
        ))
    ))
    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(GetPostAction),
        switchMap((action) => this.coreService.getPost(action.postId).pipe(
            map((post) => SetPostAction({post}))
        ))
    ))
    loaduser$ = createEffect(() => this.actions$.pipe(
        ofType(GetUserAction),
        switchMap((action) => this.coreService.getUser(action.userid).pipe(
            map((user) => SetUserAction({user}))
        ))
    ))
    loadPostData$ = createEffect(() => this.actions$.pipe(
        ofType(GetPostDataAction),
        switchMap((action) => this.coreService.getPostData(action.postId).pipe(
            map((postData) => SetPostDataAction({postData}))
        ))
    ))
    constructor(private store$: Store, private actions$: Actions, private coreService: CoreService) {}
}
