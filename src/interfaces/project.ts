import { string } from "yup"
import { User } from "./user"

export interface ProjectInterface{
    createdAt:  string
    description: string
    id: number
    image: string|null
    product_name: string
    brand: string
    price: string
    address:string|null,
    amount:string,
    catalog_id:number,
    images:[]
}