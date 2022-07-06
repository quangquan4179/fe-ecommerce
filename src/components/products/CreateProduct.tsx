import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FileUploader } from "react-drag-drop-files";
import './createProduct.css'
import { getUsers } from "../../services/api/UserService";
import { User } from "../../interfaces/user";
import Select from 'react-select';
import {OnChangeValue, ActionMeta} from 'react-select'
import makeAnimated from 'react-select/animated';
import { createProject } from "../../services/api/ProjectService";


const animatedComponents = makeAnimated();
const fileTypes = ["JPG", "PNG", "GIF"];
export interface UserOption {
    readonly value: string;
    readonly label: string;
   
  }

  interface IData {
    name: string,
    description: string
  }

const CreateProduct = () => {
    const [file, setFile] = useState<File>();
    const [formData, setFormData] = useState<IData>({
        name: '',
        description: '',
      });
   
    const  [ options, setOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState([]);
    const handleChange = (files:any) => {
        setFile(files);
      };

      useEffect(()=>{
        getUsers().then(res=>setOptions(res.map((user:User)=>({
            value:user.userId,
            label: user.username
    
        }))))
      },[])
      const {  name,  description }: {  name: string, description: string } = formData;
    const handleChangeContent = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
   const   onChange=(event:any)=>{
    setSelectedOption(event)

   }
   const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(formData.name&&selectedOption){
            const data = new FormData();
            if(file){
            data.append("img", file);
             }
            data.append("projectName", formData.name)
            data.append("description", formData.description)
            data.append("users", JSON.stringify(selectedOption.map((e:any)=>(e.value))))
            console.log(data.get("users"))

            const res = await createProject(data);
     }
   
}

  return (
    <div className="ml-4 mr-4">
      <div className=" mt-16 justify-between items-center">
        <div>
          <h1 className="font-medium text-4xl ">Create Project</h1>
        </div>
        <div className="w-[60%]  m-auto ">
          <form onSubmit={handleSubmit}>
            <div className="flex bg-[#ffffff] rounded-lg shadow-sm">
              <div className="grow-[2]"> Basic Details</div>
              <div className="grow-[3]">
                <div>
                  <div className="absolute inset-y-4 left-3">
                    <AiOutlineSearch className="h-6 w-6 fill-slate-400" />
                  </div>

                  <input
                    type="text"
                    placeholder="Project Name "
                    name="name"
                    onChange={handleChangeContent}
                    className=" placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[#6A748B]">Description</h3>
                  <textarea
                    placeholder="Write something"
                    className=" w-full scroll-smooth border  rounded-lg outline-none p-5 mt-3"
                    rows={10}
                    name="description"
                    onChange={handleChangeContent}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex bg-[#ffffff] rounded-lg mt-5 shadow-sm">
              <div className="grow-[2]"> Images</div>
              <div className="grow-[3] drop-element ">
                  <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                  <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>

              </div>
            </div>
            <div className="flex bg-[#ffffff] rounded-lg mt-5 shadow-sm">
              <div className="grow-[2]"> Members</div>
              <div className="grow-[3] ">
              <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    onChange={onChange}
                    isMulti
                    options={options}
                />
              </div>
            </div>
            <div>
                <button type="submit">submit</button>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
