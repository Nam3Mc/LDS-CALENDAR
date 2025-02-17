import * as Yup from 'yup'
import { Status } from '../../enums/status'

const InvitationSchema = Yup.object().shape({

    owner: Yup.string()
    .uuid(),

    status: Yup.string()
    .oneOf(Object.values(Status))
    .default(Status.PENDING),

    userID: Yup.string()
    .uuid(),

    friendID: Yup.string()
    .uuid(),

    appointmentID: Yup.string()
    .uuid()

})

export default InvitationSchema