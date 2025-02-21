"use client";

import TextInput from "@/utilities/textinput";
import { Formik, Form } from "formik";
import SignInSchema from '@/schemas/singIn'
import SingInValues from "@/values/singIn";

export default function LoginForm() {
    return (
        <Formik
            initialValues={SingInValues}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
                console.log("Login data:", values);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4 bg-black/70 p-8 rounded-lg shadow-lg text-white w-full max-w-sm">
                    <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                        className="bg-transparent text-white border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300"
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        className="bg-transparent text-white border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300"
                    />

                    <button
                        type="submit"
                        className="bg-yellow-500 text-black p-2 rounded-md font-semibold hover:bg-yellow-600 transition"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
