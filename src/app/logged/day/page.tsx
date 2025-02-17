"use client";

import { useState, useEffect } from "react";

export default function DayCalendar() {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  const [events, setEvents] = useState({});

  const hoursAM = Array.from({ length: 12 }, (_, i) => `${i + 0}:00 AM`);
  const hoursPM = Array.from({ length: 12 }, (_, i) => `${i + 12}:00 PM`);

  useEffect(() => {
    setSelectedDay(new Date());
  }, []);

  const handleDayClick = (index) => {
    const newDate = new Date();
    newDate.setDate(today.getDate() - today.getDay() + index + 1);
    setSelectedDay(newDate);
  };

  const handleHourClick = (hour) => {
    const event = prompt("Ingrese el evento:");
    if (event) {
      setEvents((prev) => ({ ...prev, [`${selectedDay.toDateString()}-${hour}`]: event }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6 text-white">
      
      {/* Panel Izquierdo */}
      <div className="w-1/5 bg-gray-800 p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center text-yellow-400 mb-3">
          {today.toLocaleString('es-ES', { month: 'long' }).toUpperCase()}
        </h2>
        <div className="flex flex-col gap-2">
          {days.map((day, index) => {
            const dateForDay = new Date();
            dateForDay.setDate(today.getDate() - today.getDay() + index + 1);
            return (
              <button
                key={index}
                onClick={() => handleDayClick(index)}
                className={`p-3 rounded-md text-center font-medium transition duration-300 
                  ${selectedDay.toDateString() === dateForDay.toDateString()
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-blue-600 hover:bg-blue-700 text-white"}`}
              >
                {day} {dateForDay.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel Central */}
      <div className="w-3/5 bg-gray-100 p-6 rounded-lg shadow-lg mx-6 text-gray-900">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          {selectedDay.toLocaleString('es-ES', { weekday: 'long' }).toUpperCase()}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[hoursAM, hoursPM].map((hours, idx) => (
            <div key={idx} className="w-full">
              <h3 className="text-center font-bold bg-gray-700 text-yellow-300 p-2 rounded-md mb-2">
                {idx === 0 ? "MORNING" : "AFTERNOON"}
              </h3>
              <div className="space-y-2">
                {hours.map((hour) => (
                  <div key={hour} className="flex items-center gap-2">
                    <div className="w-1/3 bg-gray-700 p-2 rounded-md text-center text-white">{hour}</div>
                    <div
                      onClick={() => handleHourClick(hour)}
                      className="w-2/3 p-2 border bg-blue-200 hover:bg-blue-400 cursor-pointer rounded-md text-center transition duration-300"
                    >
                      {events[`${selectedDay.toDateString()}-${hour}`] || ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel Derecho */}
      <div className="w-1/5 bg-gray-800 p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center text-yellow-400 mb-3">Detalles</h2>
        <p className="text-center text-sm text-gray-300">Selecciona una hora para agregar eventos.</p>
      </div>
    </div>
  );
}
