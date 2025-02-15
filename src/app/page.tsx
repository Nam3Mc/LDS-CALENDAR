import Home from "./home/page"

export default function Main() {
  return (
    <header className="bg-blue-600 p-4 flex items-center">
      <h1 className="text-center text-white text-xl font-bold w-1/5">LDS Calendari</h1>
      <nav className="w-4/5 flex justify-center">
        <ul className="flex w-full">
          <li className="flex-1 text-center text-white transition-all duration-200 hover:text-black hover:scale-110">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="flex-1 text-center text-white transition-all duration-200 hover:text-black hover:scale-110">
            <a href="#servicios">Servicios</a>
          </li>
          <li className="flex-1 text-center text-white transition-all duration-200 hover:text-black hover:scale-110">
            <a href="#contacto">Contacto</a>
          </li>
          <li className="flex-1 text-center text-white transition-all duration-200 hover:text-black hover:scale-110">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
