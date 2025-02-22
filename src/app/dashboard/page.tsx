'use client'

import { useState } from "react";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <aside
        className={`${
          isCollapsed ? "w-10" : "w-32"
        } h-full bg-gray-600 fixed top-16 left-0 p-4 flex flex-col gap-4 items-center transition-all duration-300`}
      >
        <button
          className="w-5 h-5 bg-yellow-500 rounded-full text-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? ">" : "<"}
        </button>
        {!isCollapsed && <div className="w-22 h-8 rounded text-center p-1">Calendario</div>}
        {!isCollapsed && <div className="w-22 h-8 rounded text-center p-1">Eventos</div>}
        {!isCollapsed && <div className="w-22 h-8 rounded text-center p-1">Amigos</div>}
        {!isCollapsed && <div className="w-22 h-8 rounded text-center p-1">Usuarios</div>}
      </aside>

      <main className={`${isCollapsed ? "ml-10" : "ml-32"} transition-all duration-300`}>
        <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-6">
          <h1 className="text-lg font-bold">Dashboard - Calendario</h1>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-yellow-300 rounded-lg h-24 flex items-center justify-center">Eventos Totales</div>
          <div className="p-4 bg-gray-300 rounded-lg h-24 flex items-center justify-center">Próximos Eventos</div>
          <div className="p-4 bg-gray-400 rounded-lg h-24 flex items-center justify-center">Citas Pendientes</div>
          <div className="p-4 bg-gray-500 rounded-lg h-24 flex items-center justify-center">Amigos Agregados</div>
        </section>

        {/* Events & Appointments Section */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-6 bg-white shadow-md rounded-lg h-40">Eventos Próximos</div>
          <div className="p-6 bg-gray-200 shadow-md rounded-lg h-40">Citas Agendadas</div>
        </section>

        {/* Friends & Users Section */}
        <section className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white shadow-md rounded-lg h-40">Lista de Amigos</div>
          <div className="p-6 bg-gray-300 shadow-md rounded-lg h-40">Usuarios Registrados</div>
        </section>
      </main>
    </div>
  );
}