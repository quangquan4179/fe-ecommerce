import * as yup from 'yup'


export const userSchema = yup.object({
    authorize: yup.string().required(),
    dateAtWork: yup.string(),
    dateOfBirth: yup.string(),
    gender: yup.string().required(),
    location: yup.string(),
    personalEmail: yup.string().required(),
    username: yup.string().required()
})