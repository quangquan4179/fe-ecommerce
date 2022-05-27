import { User } from "./user";

export interface PostInterFace{
    user:User,
    contents:string|null,
    sticker:string|null,
    images:string|null,
    id:number,
    comments:Comment[],
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