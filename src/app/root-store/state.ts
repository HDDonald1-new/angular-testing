import { Post } from "models/post.model";
import { PostData } from "models/share.model";
import { User } from "models/user.model";

export interface State {
    user: User
    posts: Post[]
    postData: PostData
}

export const initialState: State = {
    user: null,
    posts: null,
    postData: null
}