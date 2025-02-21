import { User } from "./user";
import { Friend } from "./friend";
import { Types } from "@/enums/type";
import { Status } from "@/enums/status";

export type Appointment = {
    id: string
    date: string
    startTime: string
    endTime: string
    description: string
    status: Status
    type: Types
    user: User[]
    friend?: Friend[]
};
