import * as Yup from 'yup'
import { Calling } from '@/enums/callins'

const UserSchema = Yup.object().shape({

    name: Yup.string()
    .required()
    .max(20)
    .min(2),

    lastname: Yup.string()
    .required()
    .max(20)
    .min(2),

    email: Yup.string()
    .optional()
    .email(),
    
    password: Yup.string()
    .required()
    .min(8)
    .max(20),

    address: Yup.string()
    .optional(),

    calling: Yup.string()
    .optional()
    .oneOf(Object.values(Calling)),

    memberId: Yup.number()
    .positive()
    .required(),

    image: Yup.string()
    .optional()
    .url(),

    phone: Yup.number()
    .required()
    .positive()
    .max(20)
    
})

export default UserSchema