import { User } from "./user";

export interface PostInterFace{
    user:User,
    content:string|null,
    images:string|null,
    id:number,
    postId:string,
    createdAt: string,
    updatedAt: string
}

export interface Comment{
    user:User,
    contents?:string,
    sticker?:string,
    images?:string,
    id:number
    
}