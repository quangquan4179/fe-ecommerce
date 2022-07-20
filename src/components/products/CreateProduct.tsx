import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./createProduct.css";
import { getUsers } from "../../services/api/UserService";
import { User } from "../../interfaces/user";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import makeAnimated from "react-select/animated";
import { createProject, getCatalog } from "../../services/api/ProjectService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { IData } from "../../interfaces";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
const { Option } = Select;

const fileTypes = ["JPG", "PNG", "GIF"];
export interface UserOption {
  readonly value: string;
  readonly label: string;
}

type Catalog = {
  id: number;
  name: string;
};
type FormData = {
  product_name: string;
  address: string;
  price: number;
  amount: number;
  brand: string;
};
const CreateProduct = () => {
  const [file, setFile] = useState<File>();
  const [listImages, setListImages] = useState<File[]>([]);
  const { register, handleSubmit, control,formState: { errors } } = useForm<FormData>();
  const [catalog, setCatalog] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  // const handleChange = (files: any) => {
  //   setFile(files);
  // };
  const handleChange = (value: any) => {
    setSelectedOption(value);
  };
  useEffect(() => {
    getCatalog().then((res) => setCatalog(res.catalogs));
  }, []);
  

  // const onChange = (event: any) => {
  //   setSelectedOption(event);
  // };

  const handleCancal = () => {
 
    setFile(undefined);
  };
  const normFile = (e: any) => {
    setFile(e.file?.originFileObj);
  };

  const normFileDrag = (e: any) => {
    // if (Array.isArray(e)) {
    //   return e;
    // }

    let arr = e.fileList.map((e:any)=>e.originFileObj)
    setListImages(arr)
    return e?.fileList;
  };
  const handleSubmits = async(data: any) => {
    console.log(data);
    console.log(file);
    console.log(listImages)
    console.log(selectedOption)
    // if (formData.product_name && selectedOption) {
      const dataSubmit = new FormData();
      if (file) {
        dataSubmit.append("image", file);
      }
   
      dataSubmit.append("product_name", data.product_name);
      dataSubmit.append("address", data.address);
      dataSubmit.append("brand",data.brand);
      dataSubmit.append('price',data.price);
      dataSubmit.append('amount', data.amount);
      dataSubmit.append('catalog', selectedOption)
      const res = await createProject(dataSubmit);
      if (listImages) {
        listImages.forEach((listImage)=>{

          dataSubmit.append("listImages", listImage);
        })
      }

    //   const res = await createProject(data);
      if (res.status) {
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
    
  };

  return (
    <div className="ml-4 mr-4">
      <div className=" mt-16 justify-between items-center">
        <div>
          <h1 className="font-medium text-4xl ">製品を作成</h1>
        </div>
        <div className="flex justify-end mr-48 mb-14">
          <Link to="/dashboard/products/">
            <button className="bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg">
              戻る
            </button>
          </Link>
        </div>
        <div className="w-[60%]  m-auto ">
          <Form
            onSubmitCapture={handleSubmit((data) => handleSubmits(data))}
            className="mb-20"
          >
            <div className="flex bg-[#ffffff] rounded-lg shadow-sm">
              <div className="grow-[2] my-4 p-5 text-lg font-bold">
                基本的な詳細
              </div>
              <div className="grow-[3] my-4 mr-4">
                <div>
                  <div className="absolute inset-y-4 left-3">
                    <AiOutlineSearch className="h-6 w-6 fill-slate-400" />
                  </div>
                  <h3 className="text-[#6A748B]">製品名</h3>
                  <Controller
                    name="product_name"
                    control={control}
                    rules={{ required: true}}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Input
                        onChange={onChange}
                        className=" placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm"
                      />
                    )}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[#6A748B]">住所</h3>
                  <Controller
                    name="address"
                    control={control}
                    rules={{ required: true}}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Input
                        onChange={onChange}
                        className=" placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm"
                      />
                    )}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[#6A748B]">ブランド</h3>
                  <Controller
                    name="brand"
                    control={control}
                    rules={{ required: true}}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Input
                        onChange={onChange}
                        className=" placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm"
                      />
                    )}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[#6A748B]">価格</h3>
                  <Controller
                    name="price"
                    control={control}
                    rules={{ required: true}}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => <InputNumber onChange={onChange} />}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[#6A748B]">額</h3>
                  <Controller
                    name="amount"
                    control={control}
                    rules={{ required: true}}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => <InputNumber onChange={onChange} />}
                  />
                </div>
                <div className="mt-4">
                <Form.Item
                  name="upload"
                  label="Upload"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  
                 
                >
                  <Upload name="logo" multiple={false} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
              </div>
              </div>
              
            </div>
            <div className="flex bg-[#ffffff] rounded-lg mt-5 shadow-sm">
              <div className="grow-[2] my-4 p-5 text-lg font-bold"> 画像</div>
              <div className="grow-[3] drop-element  my-4 mr-4">
                <Form.Item label="Dragger">
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFileDrag}
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
            <div className="flex bg-[#ffffff] rounded-lg mt-5 shadow-sm">
              <div className="grow-[2] my-4 mr-4 p-5 text-lg font-bold">
                タイプ
              </div>
              <div className="grow-[3] my-4 mr-4">
                <Form.Item>
                  <Select
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    onChange={handleChange}
                  >
                    {catalog.map((catalog: Catalog) => (
                      <Option key={catalog.name}>{catalog.name}</Option>
                    ))}
                  </Select>
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
