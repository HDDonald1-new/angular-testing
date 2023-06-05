import { Post } from "./post.model";
import { User } from "./user.model";

  export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {lat: string, lng: string}
  }

  export interface Company {
    name: string
    catchPhrase: string
    bs: string
  }

  export interface PostData {
    user: User 
    post: Post
  }