import { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import AppointmentForm from "./appointmentForm";

export default function DayCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hours = Array.from({ length: 13 }, (_, i) => `${i + 8}:00`);

  const handleDayChange = (direction: "prev" | "next") => {
    setSelectedDate((prevDate) => (direction === "prev" ? subDays(prevDate, 1) : addDays(prevDate, 1)));
  };

  const handleEventClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => handleDayChange("prev")} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-bold">
          {format(selectedDate, "EEEE, dd 'de' MMMM yyyy", { locale: es })}
        </h2>
        <button onClick={() => handleDayChange("next")} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          {hours.map((hour) => (
            <div key={hour} className="p-2 border-b text-gray-600 font-semibold">
              {hour}
            </div>
          ))}
        </div>

        <div className="col-span-9">
          {hours.map((hour) => {
            const eventKey = `${selectedDate.toDateString()}-${hour}`;
            return (
              <div key={hour} className="p-2 border-b flex items-center gap-2">
                {events[eventKey] ? (
                  <button onClick={handleEventClick} className="bg-blue-500 text-white px-3 py-1 rounded">
                    {events[eventKey]}
                  </button>
                ) : (
                  <button onClick={handleEventClick} className="text-gray-400 flex items-center">
                    <Plus className="w-4 h-4" /> Agregar evento
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <AppointmentForm />
            <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
