import * as Yup from 'yup'

const WardSchema = Yup.object().shape({

    name: Yup.string()
    .min(3)
    .max(20)
    .required(),

    address : Yup.string()
    .required(),

    unitId: Yup.number()
    .integer()
    .positive()
    .required(),

    userID: Yup.string()
    .required(),
    
    friend: Yup.string()
    .required()

})

export default WardSchema