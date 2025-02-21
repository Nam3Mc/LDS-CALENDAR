import { Calling } from "@/enums/callins";


export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    address: string
    calling: Calling
    memberId: string
    createAt: string
    image: string;
    ward?: string | null
};
