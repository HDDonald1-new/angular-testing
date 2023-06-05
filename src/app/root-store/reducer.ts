import { createReducer, on, Action } from '@ngrx/store'
import { SetPostAction, SetPostDataAction, SetPostsAction, SetUserAction } from './actions'
import { initialState, State } from "./state"

const reducer = createReducer(
    initialState,
    on(
        SetPostsAction,
        (state, { posts }) => ({ ...state, posts })
    ),
    on(
        SetPostAction,
        (state, { post }) => ({ ...state, posts: [ ...state.posts.filter((p) => p.id !== post.id), post ] })
    ),
    on(
        SetUserAction,
        (state, { user }) => ({ ...state, user })
    ),
    on(
        SetPostDataAction,
        (state, { postData }) => ({ ...state, postData })
    ),
)

export function rootReducer(state: State, action: Action) {
    return reducer(state, action)
}
