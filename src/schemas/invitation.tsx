import * as Yup from 'yup'
import { Status } from '@/enums/status'

const InvitationSchema = Yup.object().shape({

    owner: Yup.string()
    .required()
    .uuid(),

    status: Yup.string()
    .oneOf(Object.values(Status))
    .default(Status.PENDING),

    userID: Yup.string()
    .required()
    .uuid(),

    friendID: Yup.string()
    .optional()
    .uuid(),

    appointmentID: Yup.string()
    .required()
    .uuid()

})

export default InvitationSchema