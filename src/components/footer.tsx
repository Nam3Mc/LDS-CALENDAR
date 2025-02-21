import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {  
    return (
        <footer className="bg-black/70 text-white py-6 px-10 flex justify-between items-center">
            {/* Sección izquierda - Links */}
            <div className="text-left text-gray-300 text-sm font-light space-y-2">
                <div className="space-x-6">
                    <a href="/privacy" className="hover:text-yellow-500 transition">Privacy Policy</a>
                    <a href="/terms" className="hover:text-yellow-500 transition">Terms of Service</a>
                    <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
                </div>
                <p className="text-yellow-400 text-xs">
                    &copy; {new Date().getFullYear()} LDS Calendari. All rights reserved.
                </p>
            </div>

            {/* Sección derecha - Redes Sociales */}
            <div className="flex space-x-4 text-xl text-gray-300">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition hover:scale-110">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition hover:scale-110">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition hover:scale-110">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition hover:scale-110">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
}
