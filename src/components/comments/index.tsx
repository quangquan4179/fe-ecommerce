import React, { useEffect, useState } from "react";
import { PostInterFace } from "../../interfaces/posts";
import CommentStore from "../../stores/CommentStore";
import CreateComments from "./CreateComments";
import { observer } from "mobx-react-lite";
import { getComments } from "../../services/api/CommentService";
import { CommentInterFace } from "../../interfaces/comments";
import { getImgComment, getImgName } from "../../shared/img/getName";
type Props = {
  post: PostInterFace;
};

const Comments = ({ post }: Props) => {
  const [comments, setCommets] = useState<CommentInterFace[]>([]);

  useEffect(() => {
    getComments(post.postId).then((res) => {
      setCommets(res.comments);
    });
  }, []);
  return (
    <div className="mt-4">
      <div>
        {comments?.map((comment: CommentInterFace, index: number) => (
          <div key={index}>
            <div>
              <figure className="flex  pl-3 pt-9">
                {comment.user.avatarURL ? (
                  <img
                    src={getImgName(comment.user.avatarURL)}
                    alt="avt"
                    className="rounded-full h-10 w-10 object-cover "
                  />
                ) : (
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
                <div className="ml-4 bg-[#F0F2F5] rounded-lg py-1 px-4">
                  <figcaption className=" text-base mb-1">
                    <span className="font-semibold ">
                      
                      {comment.user.username}

                    </span>
                  </figcaption>
                  <figcaption>
                  <span className="font-normal ">
                  {comment.content}

                  </span>

                  </figcaption>
                </div>
              </figure>
              <div className=" ml-16 pt-2">
                {comment.images?(<img src={getImgComment(comment.images)} alt="img" className=" h-32 w-24 rounded-lg    object-cover "/>):''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Comments);
