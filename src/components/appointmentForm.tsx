import AppointmentSchema from '@/schemas/appointment'
import AppointmentValues from '@/values/appoiment'
import appointmentRequests from '@/lib/appointment';
import { Form, Formik } from 'formik'
import TextInput from '@/utilities/textinput'
import SelectInput from '@/utilities/selectInput'
import { Types } from '@/enums/type'
import { useState } from 'react';

export default function AppointmentForm() {

    const [friends, setFriends] = useState([])
    const [members, setMenbers] = useState([])

    
    return (
        <Formik
            initialValues={AppointmentValues}
            validationSchema={AppointmentSchema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
                const response = await appointmentRequests.create(values)
                resetForm()
            }}
        >
            {({ isSubmitting }) => 
            <Form>
                <TextInput label='Fecha' name='date' type='date'/>
                <TextInput label='Hora De Inicio' name='startTime' type='time'/>
                <TextInput label='Hora De Finalizacion' name='endTime' type='time'/>
                <TextInput label='Descripcion' name='description'/>
                <SelectInput label='Razonde la visita' name='type' options={Object.values(Types)}/>
                <TextInput label='Owner ID' name='ownerID'/>
                <SelectInput label='Miembro Invitado' name='userID' option={Object.values(members)}/>
                <SelectInput label='Amigo Invitado' name='friendID' option={Object.values(friends)}/>

                <button 
                    type='submit'
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    {isSubmitting ? 'Agendando' : 'Agendar'}
                </button>
            </Form>

            }
        </Formik>
    )
}