// export interface  Person { id: number; first_name: string; last_name: string, email: string; gender: string, ip_address: string }

export interface User {
    authorize: number
    avatarURL: null|string
    createdAt: string
    dateAtWork: null|string
    dateOfBirth: null|string
    gender: number
    id: number
    location: null|string
    personalEmail: string
    updatedAt: string
    userId: string
    username: string
}