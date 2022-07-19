export const  getImgName =(str:string)=>{

    const serverPath = process.env.REACT_APP_SERVER_URL
    return serverPath +'/users/images?filename='+str.slice(15)
}

export const getImgPost =(str:string)=>{
    const serverPath = process.env.REACT_APP_SERVER_URL
    return serverPath +'/post/images?filename='+str.slice(15)

}

export const getImgComment =(str:string)=>{
    const serverPath = process.env.REACT_APP_SERVER_URL
    return serverPath +'/comments/images?filename='+str.slice(21)

}
export const getImgProject =(str:string)=>{
    const serverPath = process.env.REACT_APP_SERVER_URL
    return serverPath +'/project/images?filename='+str.slice(18)

}

export const getImgTask =(str:string)=>{
    const serverPath = process.env.REACT_APP_SERVER_URL
    return serverPath +'/task/images?filename='+str.slice(15)

}