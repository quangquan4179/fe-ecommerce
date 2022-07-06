import { User } from "./user";

export interface CommentInterFace{
    user:User,
    content:string|null,
    images:string|null,
    id:number,
    postId:string,
    createdAt: string,
    updatedAt: string,
    sticker:string|null
}
