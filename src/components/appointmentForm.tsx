import AppointmentSchema from '@/schemas/appointment'
import AppointmentValues from '@/values/appoiment'
import create from '@/requests/appointment'
import { Form, Formik } from 'formik'
import TextInput from '@/utilities/textinput'
import { Status } from '@/enums/status'
import SelectInput from '@/utilities/dateinput'
import { Types } from '@/enums/type'

export default function AppointmentForm() {
    
    return (
        <Formik
            initialValues={AppointmentValues}
            validationSchema={AppointmentSchema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
                const response = create(values)
                resetForm()
            }}
        >
            {({ isSubmitting }) => 
            <Form>
                <TextInput label='Fecha' name='date' type='date'/>
                <TextInput label='Hora De Inicio' name='startTime' type='date'/>
                <TextInput label='Hora De Finalizacion' name='endTime' type='date'/>
                <TextInput label='Descripcion' name='description'/>
                <SelectInput label='Estado' name='status' options={Object.values(Status)}/>
                <SelectInput label='Tipo' name='type' options={Object.values(Types)}/>
                <TextInput label='Owner ID' name='ownerID'/>
                <TextInput label='User ID' name='userID'/>
                <TextInput label='Friend ID' name='friendID'/>

                <button 
                    type='submit'
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    {isSubmitting ? 'Agendando' : 'Agendado'}
                </button>
            </Form>

            }
        </Formik>
    )
}