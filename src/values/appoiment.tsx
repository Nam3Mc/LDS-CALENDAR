import { Status } from "@/enums/status";
import { Types } from "@/enums/type";

const AppointmentValues = {

    name: '',
    startTime: '',
    endTime: '',
    description: '',
    status: Status.PENDING,
    type: Types.TEACHING,
    ownerID: '',
    userID: '',
    friendID: ''

}

export default AppointmentValues