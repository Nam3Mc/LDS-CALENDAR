import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password cannot exceed 50 characters')
        .required('Password is required'),
});

export default SignInSchema;
