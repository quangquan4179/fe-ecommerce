import React, { useState } from 'react'
import { PostInterFace, Comment } from '../../interfaces/posts'
import { getImgName } from '../../shared/img/getName'
import Authstore from '../../stores/Authstore';
import { BiImageAdd } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io'
const CreatePost = () => {
    const [avatar, setAvatar] = useState<File>();
    const [preview, setPreview] = useState<string>();
    const [content, setContent] =useState<string>();
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setContent(e.target.value)


    }
    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }
        setAvatar(e.target.files[0]);
        const objectUrl = window.URL.createObjectURL(e.target.files[0]);

        setPreview(objectUrl);

    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (avatar) {
            const data = new FormData();
            data.append("avatar", avatar);
            data.append("userId", Authstore.user.userId);
            console.log("🚀 ~ file: CreatePost.tsx ~ line 32 ~ handleSubmit ~  data",  data)
            // const res = await uploadAvatar(data);
            // console.log("🚀 ~ file: EditProfile.tsx ~ line 80 ~ handleUploadAvatar ~ res", res)

        }
        console.log(content)
        
    }


    const handleCancal = () => {
        setPreview('')
        setAvatar(undefined)
    }
    return (
        <div className='bg-[#FFFFFF] shadow-sm rounded-lg mb-10 '>
            <div className='p-5'>
                <figure className='flex '>

                    {Authstore.user?.avatarURL ? (<img src={getImgName(Authstore.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />) : (
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    )}
                    <div className='ml-4'>
                        <figcaption className=' text-base mb-1'><span className='font-medium'> {Authstore.user.username}</span> </figcaption>
                    </div>

                </figure>
                <div className='mt-4 w-full'>
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="What's on your mind" className=' w-full scroll-smooth border  rounded-lg' rows={4} onChange={(e:any)=>handleChange(e)}></textarea>

                        <div>
                            {avatar ? (
                                <div className="flex flex-col w-full relative border rounded-lg">
                                    <img className='object-cover w-full rounded-lg p-2' src={preview} />
                                    <div>
                                      
                                        <button className='bg-[#FFFFFF] text-[#757B83] font-bold    absolute top-4 right-4 rounded-full' onClick={handleCancal}>
                                            <IoMdClose size={30} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <label htmlFor='input-file' className=' cursor-pointer  block'   >
                                    <BiImageAdd size={30} />

                                    <input type='file' className='hidden' id="input-file" accept="image/png, image/gif, image/jpeg" onChange={handleChangeFile} />

                                </label>
                            )}
                        </div>
                        <div> 
                            <button className='bg-[#5048E5] text-[#FFFFFF] font-bold  w-full pt-2 pb-2 rounded-lg mt-4 '>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost