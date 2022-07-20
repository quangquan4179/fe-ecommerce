import React, { useEffect, useState } from "react";
import { Button, PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { deleteProduct, getAllProject, getProjects } from "../../services/api/ProjectService";
import { Link } from "react-router-dom";
import { getImgName, getImgProject } from "../../shared/img/getName";
import { BsArrowRight } from "react-icons/bs";
import { Image } from 'antd';
import { ProjectInterface } from "../../interfaces/project";
import {DeleteOutlined} from '@ant-design/icons'
import { toast } from "react-toastify";
const Products = () => {
  const [projects, setProjects]= useState<ProjectInterface[]>([])
  const [page, setPage] = useState(0)
  const [current, setCurrent] = useState(1);
  const tableHeader = [
    'Overview',
    'Name',
    'Price',
    'Count',
    "Action"
  ]
  useEffect(()=>{
    getProjects(current).then(res=>{
      setProjects(res.products)
      // setPage(res.numberPages)
    })
    console.log("🚀 ~ file: Products.tsx ~ line 27 ~ getProjects ~ Math.round(res.numberPages)", page)

  },[])


  const onChange: PaginationProps['onChange'] = page => {
    console.log(page);
    setCurrent(page);
  };

  const handleDelete=async(id:any)=>{
    let index = projects.findIndex((e:ProjectInterface)=>e.id==id);
    let newPr =[...projects]
    newPr.splice(index,1);

    const res = await deleteProduct(id);
    setProjects(newPr)

    if (res.status) {
      toast.success(res.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setOptions([])
      
     
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
  return (
    <div className="ml-4 mr-4">
      <div className="flex mt-16 justify-between items-center">
        <div>
          <h1 className="font-medium text-4xl ">Product</h1>
        </div>
        <div>
          <Link to="/dashboard/products/create">
            <button className="bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg">
              +Add
            </button>
          </Link>
        </div>
      </div>
     
      <div>
      <table className='table-auto w-full border rounded-lg'>
            <thead className='bg-[#F3F4F6] h-12'>
                <tr className='bg-[#111827] text-[#ffffff]'>
                    {tableHeader.map((header:string,i:number)=><th key={i} className='border'>{header}</th>)}
                </tr>
            </thead>
            <tbody>
              {projects.map((project:ProjectInterface,index:number)=><tr key={index} className='h-24 border'>
                <td className="text-center ">
                  <figure className="flex">
                  <Image src={getImgName(project.image)} alt='avt' width='100px' />
                    <figcaption>{project.product_name}</figcaption>
                  </figure>
                </td>
                <td className="text-center">
                  {project.product_name}
                </td>
                <td className="text-center">{project?.price}</td>
                <td className="text-center">{project?.amount}</td>
                <td className="flex justify-evenly items-center text-center">
                  <Button onClick={()=>handleDelete(project.id)}><DeleteOutlined /></Button>
                <Link to={`/dashboard/products/${project.id}`}><BsArrowRight size={20}/></Link>
                </td>
              </tr>)}
            </tbody>
      </table>
      <div className="flex justify-end mt-5">
         <Pagination current={current} onChange={onChange} total={page*10} />
      </div>
      </div>
    </div>
  );
};

export default Products;
