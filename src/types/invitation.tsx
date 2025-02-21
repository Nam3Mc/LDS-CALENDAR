import { User } from "./user";
import { Friend } from "./friend";
import { Status } from "@/enums/status";
import { Appointment } from "./appointment";

export type Invitation = {
    id: string;
    owner: User[]
    status: Status
    user: User[]
    friend: Friend[]
    appointment: Appointment[]
};
