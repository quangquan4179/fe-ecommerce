
import { action, makeObservable, observable } from "mobx";
import { CommentInterFace } from "../interfaces/comments";
import { getComments } from "../services/api/CommentService";

class CommentStore{
    comments:CommentInterFace[]=[]
    constructor(){
        makeObservable(this,{
            comments:observable,
            setComments:action
            
        })
        
    }

    setComments(comments:CommentInterFace[]){
        this.comments=comments

    }

    async getComment(postId:string){
        const res = await getComments(postId);
        if(res.success){
            this.setComments(res.comments)
            // console.log(this.comments)
        }

    }

}
export default new CommentStore()