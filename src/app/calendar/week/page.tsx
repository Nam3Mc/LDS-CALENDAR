"use client";

import { useState, useEffect } from "react";

export default function WeekCalendar() {
  const today = new Date();
  const [selectedWeek, setSelectedWeek] = useState(getStartOfWeek(today));
  const [events, setEvents] = useState({});

  const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  useEffect(() => {
    setSelectedWeek(getStartOfWeek(new Date()));
  }, []);

  function getStartOfWeek(date) {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay() + 1);
    return start;
  }

  function changeWeek(offset) {
    const newWeek = new Date(selectedWeek);
    newWeek.setDate(selectedWeek.getDate() + offset * 7);
    setSelectedWeek(newWeek);
  }

  function handleHourClick(dayIndex, hour) {
    const event = prompt("Ingrese el evento:");
    if (event) {
      setEvents((prev) => ({ ...prev, [`${selectedWeek.toDateString()}-${dayIndex}-${hour}`]: event }));
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-6">
      {/* Panel superior para cambiar de semana */}
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md mb-4">
        <button
          onClick={() => changeWeek(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ⬅ Semana Anterior
        </button>
        <h2 className="text-lg font-bold">
          {selectedWeek.toLocaleString("es-ES", { month: "long" }).toUpperCase()} - SEMANA {Math.ceil(selectedWeek.getDate() / 7)}
        </h2>
        <button
          onClick={() => changeWeek(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Semana Siguiente ➡
        </button>
      </div>

      {/* Panel principal */}
      <div className="flex flex-row gap-4">
        {/* Calendario de la semana */}
        <div className="w-4/5 bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-8 border-b pb-2 mb-2">
            <div></div>
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center font-bold bg-gray-700 p-2 rounded-md">
                {day}
              </div>
            ))}
          </div>
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-8 border-b py-1">
              <div className="text-center font-bold bg-gray-700 p-2 rounded-md">{hour}</div>
              {daysOfWeek.map((_, dayIndex) => (
                <div
                  key={dayIndex}
                  onClick={() => handleHourClick(dayIndex, hour)}
                  className="p-2 border bg-gray-600 hover:bg-gray-500 cursor-pointer text-center rounded-md"
                >
                  {events[`${selectedWeek.toDateString()}-${dayIndex}-${hour}`] || ""}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Panel lateral de detalles */}
        <div className="w-1/5 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-center mb-2">Detalles</h2>
          <p className="text-center text-sm">Selecciona una hora para agregar eventos.</p>
        </div>
      </div>
    </div>
  );
}
