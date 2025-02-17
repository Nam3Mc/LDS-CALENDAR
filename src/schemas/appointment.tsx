import * as Yup from 'yup'
import { Types } from '../enums/type'
import { Status } from '../enums/status'

const AppointmentSchema = Yup.object().shape({

    date: Yup.date(),

    startTime: Yup.date(),

    endTime: Yup.date(),

    description: Yup.string()
    .max(200)
    .min(20),
    
    status: Yup.string()
    .oneOf(Object.values(Status))
    .default(Status.PENDING),

    type: Yup.string()
    .oneOf(Object.values(Types))
    .default(Types.TEACHING),

    ownerID: Yup.string()
    .uuid(),

    userID: Yup.string()
    .uuid(),

    friendID: Yup.string()
    .uuid()
})

export default AppointmentSchema