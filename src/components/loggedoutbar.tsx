export default function LoggedOutBar() {  
    return (
        <header className="bg-gray-800 py-4 px-10 flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-white text-xl font-semibold">
                <a href="/" className="hover:text-gray-300 transition">LDS Calendari</a>
            </h1>
  
            {/* Menú de Navegación */}
            <nav>
                <ul className="flex space-x-6 text-sm font-light text-white">
                    <li>
                        <a href="/" className="hover:text-gray-300 transition hover:scale-105">Home</a>
                    </li>
                    <li>
                        <a href="/week" className="hover:text-gray-300 transition hover:scale-105">About Us</a>
                    </li>
                    <li>
                        <a href="/signin" className="hover:text-gray-300 transition hover:scale-105">Sign In</a>
                    </li>
                    <li>
                        <a href="/signup" className="hover:text-gray-300 transition hover:scale-105">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
