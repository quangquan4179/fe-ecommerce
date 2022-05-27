export const  getImgName =(str:string)=>{

    const serverPath = process.env.REACT_APP_SERVER_URL
    return serverPath +'/users/images?filename='+str.slice(15)
}