import { Appointment } from "@/types/appointment";

export default function AppointmentMapper(appointmentsList: Appointment[]) {
    
    return appointmentsList.map((appointment: Appointment) => {
            const eventDate = new Date(appointment.date).toDateString()
            const eventStart = new Date(`1970-01-01T${appointment.startTime}Z`)
                .toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true })
            const eventEnd = new Date(`1970-01-01T${appointment.endTime}Z`)
                .toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true })

        return {
            id: appointment.id,
            date: eventDate,
            startTime: eventStart,
            endTime: eventEnd,
            description: appointment.description
        };
    });
}