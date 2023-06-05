import { createAction, props } from '@ngrx/store'

import { Post } from 'models/post.model'
import { PostData } from 'models/share.model'
import { User } from 'models/user.model'

export enum ActionTypes {
    GET_POSTS = '[Root] Get posts',
    SET_POSTS = '[Root] Set posts',
    GET_POST = '[Root] Get post',
    SET_POST = '[Root] Set post',
    SAVE_POST = '[Root] Save post',
    GET_USER = '[Root] Get user',
    SET_USER = '[Root] Set user',
    GET_POST_DATA = '[Root] Get post data',
    SET_POST_DATA = '[Root] Set post data',
    CLEAR_STATE = '[Root] Clear state' 
}

export const ClearRootStateAction = createAction(ActionTypes.CLEAR_STATE)

export const GetPostsAction = createAction(ActionTypes.GET_POSTS)
export const SetPostsAction = createAction(
    ActionTypes.SET_POSTS,
    props<{ posts: Post[] }>()
)

export const GetPostAction = createAction(
    ActionTypes.GET_POST,
    props<{ postId: number }>()
)

export const SetPostAction = createAction(
    ActionTypes.SET_POST,
    props<{ post: Post }>()
)

export const SavePostAction = createAction(
    ActionTypes.SAVE_POST,
    props<{ post: Partial<Post> & {id: number} }>()
)

export const GetUserAction = createAction(
    ActionTypes.GET_USER,
    props<{ userid: number }>()
)
export const SetUserAction = createAction(
    ActionTypes.SET_USER,
    props<{ user: User }>()
)

export const GetPostDataAction = createAction(
    ActionTypes.GET_POST_DATA,
    props<{ postId: number }>()
)
export const SetPostDataAction = createAction(
    ActionTypes.SET_POST_DATA,
    props<{ postData: PostData }>()
)
