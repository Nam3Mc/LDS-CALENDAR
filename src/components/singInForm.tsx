"use client";

import TextInput from "@/utilities/textinput";
import { Formik, Form } from "formik";
import SignInSchema from '@/schemas/signIn';
import SignInValues from "@/values/signIn";
import authRequest from '@/lib/auth';
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    return (
        <Formik
            initialValues={SignInValues}
            validationSchema={SignInSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const response = await authRequest.signIn(values);
                    console.log("Response:", response);

                    if (response) {
                        if (typeof window !== "undefined") {
                            localStorage.setItem('token', response.access);
                            localStorage.setItem('User', JSON.stringify(response.userData));
                            localStorage.setItem('Status', 'LOGGED')
                        }

                        alert("User Logged Successfully");
                        router.push('/dashboard');
                    } else {
                        alert("Invalid credentials. Please try again.");
                    }
                } catch (error) {
                    console.error("Login Error:", error);
                    alert("An error occurred while signing in. Please try again.");
                } finally {
                    setSubmitting(false);
                }
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
