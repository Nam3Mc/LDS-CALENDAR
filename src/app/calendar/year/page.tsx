"use client";

import { useState, useEffect } from "react";

export default function MonthCalendar() {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [events, setEvents] = useState({});

  const months = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  useEffect(() => {
    setSelectedYear(today.getFullYear());
  }, []);

  function changeYear(offset) {
    setSelectedYear((prevYear) => prevYear + offset);
  }

  function handleDayClick(monthIndex, day) {
    const event = prompt("Ingrese el evento:");
    if (event) {
      setEvents((prev) => ({
        ...prev,
        [`${selectedYear}-${monthIndex + 1}-${day}`]: event,
      }));
    }
  }

  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-6">
      {/* Panel superior para cambiar de año */}
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md mb-4">
        <button
          onClick={() => changeYear(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ⬅ Año Anterior
        </button>
        <h2 className="text-lg font-bold">{selectedYear}</h2>
        <button
          onClick={() => changeYear(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Año Siguiente ➡
        </button>
      </div>

      {/* Panel principal */}
      <div className="flex flex-row gap-4">
        {/* Calendario de meses */}
        <div className="grid grid-cols-4 gap-4 w-4/5">
          {months.map((month, monthIndex) => (
            <div key={monthIndex} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-center font-bold mb-2">{month}</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {[...Array(getDaysInMonth(monthIndex, selectedYear))].map((_, day) => (
                  <div
                    key={day}
                    onClick={() => handleDayClick(monthIndex, day + 1)}
                    className="p-1 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-md relative"
                  >
                    {day + 1}
                    {events[`${selectedYear}-${monthIndex + 1}-${day + 1}`] && (
                      <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs p-1 rounded-full">
                        •
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Panel lateral de eventos próximos */}
        <div className="w-1/5 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-center mb-2">Eventos Próximos</h2>
          <ul className="text-sm">
            {Object.entries(events)
              .sort(([a], [b]) => new Date(a) - new Date(b))
              .slice(0, 5)
              .map(([date, event], index) => (
                <li key={index} className="p-2 border-b border-gray-700">
                  <strong>{date}:</strong> {event}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}