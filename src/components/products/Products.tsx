import React, { useEffect, useState } from "react";
import { RiDownloadLine, RiUploadLine } from "react-icons/ri";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { getAllProject, getProjects } from "../../services/api/ProjectService";
import { Link } from "react-router-dom";
import { getImgProject } from "../../shared/img/getName";
import ReactPaginate from 'react-paginate';
import { FiEdit } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Image } from 'antd';
import { ProjectInterface } from "../../interfaces/project";
const Products = () => {
  const [projects, setProjects]= useState<ProjectInterface[]>([])
  const [page, setPage] = useState(0)
  const [current, setCurrent] = useState(1);
  const tableHeader = [
    'Name',
    'Date',
    'Status',
    "Action"
  ]
  useEffect(()=>{
    getProjects(current).then(res=>{
      setProjects(res.products)
      // setPage(res.numberPages)
    })
    console.log("🚀 ~ file: Products.tsx ~ line 27 ~ getProjects ~ Math.round(res.numberPages)", page)

  },[current ])


  const onChange: PaginationProps['onChange'] = page => {
    console.log(page);
    setCurrent(page);
  };
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
      {/* <div className="flex mt-9 mb-9">
        <button className="flex items-center text-[#5048E5] font-medium hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5">
          <RiUploadLine />
          <p className="ml-2">Import</p>
        </button>
        <button className="flex items-center text-[#5048E5] font-medium ml-4 hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5">
          <RiDownloadLine />
          <p className="ml-2">Export</p>
        </button>
      </div> */}
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
                  <Image src={`http://localhost:8888/storage/WSN4mrwQcTsFODLpafSo8X7D4tGqE2iRS4nqw5eh.png`} alt='avt' width='100px' />
                    <figcaption>{project.product_name}</figcaption>
                  </figure>
                </td>
                <td className="text-center">
                  {project.product_name}
                </td>
                <td className="text-center">{project?.amount}</td>
                <td className="flex justify-evenly items-center text-center">
                {/* <Link to={`/dashboard/products/edit/${project.projectId}`} className="w-full"><FiEdit size={20}/></Link>
                <Link to={`/dashboard/products/${project.projectId}`}><BsArrowRight size={20}/></Link> */}
                </td>
              </tr>)}
            </tbody>
      </table>
      <div className="flex justify-end mt-5">
      {/* <ReactPaginate 
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={page}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        className="flex justify-evenly  w-[40%] paginator"
        /> */}
         <Pagination current={current} onChange={onChange} total={page*10} />
      </div>
      </div>
    </div>
  );
};

export default Products;
