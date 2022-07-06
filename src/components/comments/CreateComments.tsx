import React, { useState } from "react";
import Authstore from "../../stores/Authstore";
import { getImgName } from "../../shared/img/getName";
import { BsImage } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { createComment } from "../../services/api/CommentService";
import { PostInterFace } from "../../interfaces/posts";
import { BiImageAdd } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
type Props = {
  post: PostInterFace;
};

const CreateComments = ({ post }: Props) => {
  const [images, setImg] = useState<File>();
  const [pre, setPreview] = useState<string>();
  const [content, setContent] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setImg(e.target.files[0]);
    const objectUrl = window.URL.createObjectURL(e.target.files[0]);

    setPreview(objectUrl);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (content) {
      const data = new FormData();
      if (images) {
        data.append("img", images);
      }
      data.append("postId", post.postId);
      data.append("userId", Authstore.user.userId);
      data.append("content", content);

      await createComment(data);
      setImg(undefined);
      setContent(undefined);
      setPreview(undefined)
    }

    console.log(content);
  };
  const handleCancal = () => {
    setPreview("");
    setImg(undefined);
  };

  return (
    <div className="flex my-7">
      <figure className="flex ">
        {Authstore.user?.avatarURL ? (
          <img
            src={getImgName(Authstore.user.avatarURL)}
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
        <div className="ml-4">
          <figcaption className=" text-base mb-1">
            <span className="font-medium "> {Authstore.user.username}</span>
          </figcaption>
        </div>
      </figure>
      <form className="grow  " onSubmit={handleSubmit}>
        <div className="flex ">
          <textarea
            placeholder="write comment"
            className="p-1 grow ml-3 bg-[#e9e7e7] rounded-lg"
            onChange={(e: any) => handleChange(e)}
          />
          <input
            type="file"
            hidden
            id={post.postId}
            className="outline-none"
            onChange={handleChangeFile}
          />

        
          <div className="w-28 flex justify-center items-center">
            <label className="inline-block" htmlFor={post.postId}>
              <BsImage  size={20} className="text-[#adaaaa] cursor-pointer hover:text-[#2440e0]"/>
            </label>
            <button type="submit" className="ml-5">
              <IoMdSend size={20} className="text-[#adaaaa] cursor-pointer hover:text-[#2440e0]"/>
            </button>
          </div>

        </div>
        {images ? (
          <div className="flex flex-col w-36 relative border rounded-lg mt-3 ml-3">
            <img className="object-cover w-full rounded-lg p-2" src={pre} />
            <div>
              <button
                className="bg-[#FFFFFF] text-[#757B83] font-bold    absolute top-2 right-2 rounded-full"
                onClick={handleCancal}
              >
                <IoMdClose size={20} />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
       
      </form>
       
    </div>
  );
};

export default CreateComments;
