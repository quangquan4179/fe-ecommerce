import React from "react";
import { RiDownloadLine, RiUploadLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="ml-4 mr-4">
      <div className="flex mt-16 justify-between items-center">
        <div>
          <h1 className="font-medium text-4xl ">Project</h1>
        </div>
        <div>
          <Link to="/dashboard/products/create">
            <button className="bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg">
              +Add
            </button>
          </Link>
        </div>
      </div>
      <div className="flex mt-9 mb-9">
        <button className="flex items-center text-[#5048E5] font-medium hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5">
          <RiUploadLine />
          <p className="ml-2">Import</p>
        </button>
        <button className="flex items-center text-[#5048E5] font-medium ml-4 hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5">
          <RiDownloadLine />
          <p className="ml-2">Export</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
