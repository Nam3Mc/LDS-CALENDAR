"use client";

import { useState } from "react";

export default function MonthCalendar() {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [events, setEvents] = useState({});
  const [viewMode, setViewMode] = useState({});

  const months = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  function changeMonth(offset) {
    setSelectedMonth((prevMonth) => {
      let newMonth = prevMonth + offset;
      let newYear = selectedYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
      setSelectedYear(newYear);
      return newMonth;
    });
  }

  function handleDayClick(day) {
    const time = prompt("Ingrese la hora (HH:MM):");
    const event = prompt("Ingrese el evento:");
    if (event && time) {
      setEvents((prev) => {
        const key = `${selectedYear}-${selectedMonth + 1}-${day}`;
        return {
          ...prev,
          [key]: [...(prev[key] || []), { time, event }],
        };
      });
    }
  }

  function toggleView(day) {
    setViewMode((prev) => ({
      ...prev,
      [day]: prev[day] === "AM" ? "PM" : "AM",
    }));
  }

  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-6">
      {/* Panel superior para cambiar de mes */}
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ⬅ Mes Anterior
        </button>
        <h2 className="text-lg font-bold">{months[selectedMonth]} {selectedYear}</h2>
        <button
          onClick={() => changeMonth(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Mes Siguiente ➡
        </button>
      </div>

      {/* Panel principal */}
      <div className="flex flex-row gap-4">
        {/* Panel lateral de eventos próximos */}
        <div className="w-1/5 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-center mb-2">Eventos Próximos</h2>
          <ul className="text-sm">
            {Object.entries(events)
              .flatMap(([date, eventList]) => eventList.map(event => ({ date, ...event })))
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .slice(0, 5)
              .map(({ date, time, event }, index) => (
                <li key={index} className="p-2 border-b border-gray-700">
                  <strong>{date} {time}:</strong> {event}
                </li>
              ))}
          </ul>
        </div>

        {/* Calendario mensual */}
        <div className="w-4/5 bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-center font-bold mb-2">{months[selectedMonth]}</h3>
          {/* Encabezado con los días de la semana */}
          <div className="grid grid-cols-7 text-center font-bold mb-2">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="p-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {[...Array(getDaysInMonth(selectedMonth, selectedYear))].map((_, day) => (
              <div
                key={day}
                onClick={() => handleDayClick(day + 1)}
                className="p-2 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-md relative"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold mb-1">{day + 1}</span>
                  <button
                    className="text-xs bg-blue-500 hover:bg-blue-700 text-white px-1 py-0.5 rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleView(day + 1);
                    }}
                  >
                    {viewMode[day + 1] === "PM" ? "PM" : "AM"}
                  </button>
                </div>
                {/* Mini lista de eventos con horario */}
                <div
                  className="border-t border-gray-500 pt-1 h-20 overflow-y-auto text-left text-xs 
                  scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-700 rounded-md"
                >
                  {[...Array(12)].map((_, hour) => (
                    <div key={hour} className="flex items-center border-b border-gray-600 py-0.5">
                      <span className="w-6 text-gray-400">
                        {viewMode[day + 1] === "PM" ? hour + 12 : hour}:00
                      </span>
                      <div className="flex-1">
                        {(events[`${selectedYear}-${selectedMonth + 1}-${day + 1}`] || [])
                          .filter(e => e.time.startsWith(`${viewMode[day + 1] === "PM" ? hour + 12 : hour}:`))
                          .map((e, index) => (
                            <div key={index} className="bg-blue-500 text-white px-2 py-1 rounded mb-1 truncate">
                              {e.event}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
