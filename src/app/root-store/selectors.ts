import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "models/post.model";
import { PostData } from "models/share.model";
import { User } from "models/user.model";
import { State } from "./state";

const selectRootState = createFeatureSelector<State>('rootReducer')

const getUser = (state: State): User => state.user
const getPosts = (state: State): Post[] => state.posts
const getPost = (posts: Post[], { id }): Post => posts.find((post) => post.id === id)
const getPostData = (state: State): PostData => state.postData

export const selectUser = createSelector(selectRootState, getUser)
export const selectPosts = createSelector(selectRootState, getPosts)
export const selectPostData = createSelector(selectRootState, getPostData)
export const selectPost = createSelector(selectPosts, getPost)