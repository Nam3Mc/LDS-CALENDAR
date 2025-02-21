import AppointmentSchema from '@/schemas/appointment'
import AppointmentValues from '@/values/appoiment'
import { Form, Formik } from 'formik'
import TextInput from '@/utilities/textinput'
import create from '@/lib/friends'

export default function FriendFrom() {
    
    return (
        <Formik
            initialValues={AppointmentValues}
            validationSchema={AppointmentSchema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
                const response = await create(values)
                resetForm()
            }}
        >
            {({ isSubmitting }) => 
            <Form>
                <TextInput label='Nombre(s)' name='name'/>
                <TextInput label='Apellido(s)' name='lastName'/>
                <TextInput label='Direccion' name='address'/>
                <TextInput label='Telefono' name='phone'/>

                <button 
                    type='submit'
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    {isSubmitting ? 'Registrado' : 'Registrar'}
                </button>
            </Form>
            }
        </Formik>
    )
}