"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {  
    return (
        <header className="bg-gray-800 py-4 px-10 flex items-center justify-between">
            <h1 className="text-white text-xl font-semibold">
                <a href="/" className="hover:text-gray-300 transition">LDS Calendari</a>
            </h1>
  
            <nav>
                <ul className="flex space-x-6 text-sm font-light text-white">
                    <li><a href="/" className="hover:text-gray-300 transition hover:scale-105">Home</a></li>
                    <li><a href="/aboutus" className="hover:text-gray-300 transition hover:scale-105">About Us</a></li>
                    <li><a href="/signin" className="hover:text-gray-300 transition hover:scale-105">Sign In</a></li>
                    <li><a href="/signup" className="hover:text-gray-300 transition hover:scale-105">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
}

function LoggedBar({ setIsLogged }: { setIsLogged: (value: boolean) => void }) {  
    const router = useRouter();

    const handleLogout = () => {
        localStorage.clear()
        setIsLogged(false)
        router.push("/")
    };

    return (
        <header className="bg-gray-600 p-4 flex items-center justify-between">
            <h1 className="text-white text-xl font-bold">
                <a href="/dashboard">Your LDS Dashboard</a>
            </h1>

            <nav className="flex-1 flex justify-center">
                <ul className="flex space-x-8 text-white font-medium">
                    <li className="hover:scale-110 transition"><a href="/dashboard/day">See My Day</a></li>
                    <li className="hover:scale-110 transition"><a href="/dashboard/week">See My Week</a></li>
                    <li className="hover:scale-110 transition"><a href="/dashboard/month">See My Month</a></li>
                </ul>
            </nav>

            <button 
                onClick={handleLogout}
                className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
                Logout
            </button>
        </header>
    );
}

export default function Header() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const status = localStorage.getItem("Status");
        if (status === "LOGGED") {
            setIsLogged(true);
        }
    }, []);

    return isLogged ? <LoggedBar setIsLogged={setIsLogged} /> : <Navbar />;
}