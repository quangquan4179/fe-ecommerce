import { User } from "./user"

export interface TaskInterface{
    createdAt:  string
    description: string
    id: number
    images: string|null
    name: string
    status: boolean
    updatedAt: string
    users:User[],
    projectId:string
}