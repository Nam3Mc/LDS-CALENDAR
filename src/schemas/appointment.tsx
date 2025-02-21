import * as Yup from 'yup'
import { Types } from '../enums/type'
import { Status } from '../enums/status'

const AppointmentSchema = Yup.object().shape({

    date: Yup.date(),

    startTime: Yup.string(),

    endTime: Yup.string(),

    description: Yup.string()
    .optional()
    .max(200)
    .min(20),
    
    status: Yup.string()
    .oneOf(Object.values(Status))
    .default(Status.PENDING),

    type: Yup.string()
    .oneOf(Object.values(Types))
    .default(Types.TEACHING),

    ownerID: Yup.string()
    .required(),

    userID: Yup.string()
    .optional(),

    friendID: Yup.string()
    .optional()
})

export default AppointmentSchema