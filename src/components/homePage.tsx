import LoginForm from "./singInForm";

export default function Home() {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Sección de la imagen */}
            <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
                <img 
                    src="/placeholder-image.jpg" 
                    alt="LDS Community" 
                    className="w-3/4 h-auto rounded-lg shadow-lg border-4 border-yellow-400"
                />
            </div>

            {/* Sección del formulario */}
            <div className="w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md bg-black/70 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-yellow-400">Welcome Back</h2>
                    <p className="text-gray-300 text-sm text-center mb-4">Sign in to continue</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
