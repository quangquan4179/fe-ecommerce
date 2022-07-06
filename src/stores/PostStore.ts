import { action, makeObservable, observable } from "mobx";
import { Nullable } from "../interfaces";
import { PostInterFace } from "../interfaces/posts";
import { getAllPost } from "../services/api/PostService";
 class PostStore {
   
    posts : Nullable<PostInterFace>=[]
    constructor(){
        makeObservable(this,{
            posts:observable,
            setPost:action
        })
    }
    
    setPost(data:PostInterFace[]){
        this.posts=data
        
    }
    async getAllPosts(){
        const res = await getAllPost()
        if(res.success){
            this.setPost(res.posts)
            console.log("🚀 ~ file: PostStore.ts ~ line 8 ~ PostStore ~ posts", this.posts)
        
      }
      

  }
}

export default new PostStore()