import * as Yup from 'yup'

const FriendSchema = Yup.object().shape({
    
    name: Yup.string()
    .min(2)
    .max(20)
    .required(),

    lastName: Yup.string()
    .min(2)
    .max(20)
    .required(),

    address: Yup.string()
    .optional()
    .max(200),

    phone: Yup.number()
    .positive()
    .optional()
})