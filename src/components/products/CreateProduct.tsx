import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./createProduct.css";
import { getUsers } from "../../services/api/UserService";
import { User } from "../../interfaces/user";
import { InboxOutlined } from "@ant-design/icons";
import makeAnimated from "react-select/animated";
import { createProject } from "../../services/api/ProjectService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { IData } from "../../interfaces";
import { Form, Select, Upload} from "antd";
const { Option } = Select;

const fileTypes = ["JPG", "PNG", "GIF"];
export interface UserOption {
  readonly value: string;
  readonly label: string;
}

const CreateProduct = () => {
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState<IData>({
    name: "",
    description: "",
  });
  const  [ users, setUsers] = useState<User[]>([])
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  // const handleChange = (files: any) => {
  //   setFile(files);
  // };
  const handleChange = (value: any) => {
    setSelectedOption(value);
  };
  useEffect(() => {
  }, []);
  const { name, description }: { name: string; description: string } = formData;
  const handleChangeContent = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const onChange = (event: any) => {
  //   setSelectedOption(event);
  // };

  const handleCancal = () => {
    setFormData({
      name: "",
      description: "",
    });
    setFile(undefined);
  };
  const normFile = (e: any) => {
    setFile(e.file?.originFileObj)
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name && selectedOption) {
      const data = new FormData();
      if (file) {
        data.append("img", file);
      }
      data.append("projectName", formData.name);
      data.append("description", formData.description);
      data.append(
        "users",
        JSON.stringify(selectedOption)
      );
     

      const res = await createProject(data);
      if (res.success) {
        toast.success("Create success.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setOptions([])
        setFormData({
          name: "",
          description: "",
        });
        setFile(undefined);
      } else {
        toast.error("Create false.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div className="ml-4 mr-4">
      <div className=" mt-16 justify-between items-center">
        <div>
          <h1 className="font-medium text-4xl ">Create Project</h1>
        </div>
        <div className="flex justify-end mr-48 mb-14">
          <Link to="/dashboard/products/">
            <button className="bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg">
              Back
            </button>
          </Link>
        </div>
        <div className="w-[60%]  m-auto ">
          <Form onSubmitCapture={handleSubmit} className="mb-20">
            <div className="flex bg-[#ffffff] rounded-lg shadow-sm">
              <div className="grow-[2] my-4 p-5 text-lg font-bold">
               
                Basic Details
              </div>
              <div className="grow-[3] my-4 mr-4">
                <div>
                  <div className="absolute inset-y-4 left-3">
                    <AiOutlineSearch className="h-6 w-6 fill-slate-400" />
                  </div>

                  <input
                    value={name}
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
                    value={description}
                    name="description"
                    onChange={handleChangeContent}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex bg-[#ffffff] rounded-lg mt-5 shadow-sm">
              <div className="grow-[2] my-4 p-5 text-lg font-bold"> Images</div>
              <div className="grow-[3] drop-element  my-4 mr-4">
              <Form.Item label="Dragger">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
              </div>
            </div>
         
            <div className="flex justify-end mt-7">
              <button
                className="bg-[#df1919] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg"
                onClick={handleCancal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg"
              >
                submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
