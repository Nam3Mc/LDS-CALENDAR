'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const FullCalendarComponent = () => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const [calendar, setCalendar] = useState<Calendar | null>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const newCalendar = new Calendar(calendarRef.current, {
        plugins: [listPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'listWeek,timeGridWeek',
        },
        selectable: true,
        editable: true,
        slotDuration: '00:15:00',
        slotLabelInterval: '00:15:00',
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        },
        businessHours: {
          daysOfWeek: [1, 2, 3, 4, 5, 6, 0],
          startTime: '08:00',
          endTime: '20:00',
        },
        allDaySlot: false,
        events: [],
        select: (info) => {
          const title = prompt('Ingrese el nombre de la actividad:');
          if (title) {
            newCalendar.addEvent({
              title,
              start: info.startStr,
              end: info.endStr,
              allDay: false,
            });
          }
        },
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
        },
        height: 'auto',
        expandRows: true,
        scrollTime: '08:00:00',
        slotMinTime: '08:00:00',
        slotMaxTime: '20:00:00',
        dayHeaderFormat: { weekday: 'long' },
        locale: 'es',
      });
      newCalendar.render();
      setCalendar(newCalendar);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 p-8">
      <div className="w-4/5 max-w-6xl border border-gray-600 rounded-lg p-8 bg-gray-900 shadow-md overflow-hidden text-white">
        <div className="w-full flex justify-between items-center bg-gray-700 text-white font-bold py-2 px-4 rounded-t-md text-center text-2xl">
          <button className="text-gray-300 hover:text-white" onClick={() => calendar?.prev()}>⬅</button>
          <span className="text-white text-lg capitalize">
            {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </span>
          <button className="text-gray-300 hover:text-white" onClick={() => calendar?.next()}>➡</button>
        </div>
        <div className="h-[600px] w-full overflow-y-auto bg-gray-700 rounded-md p-3 border-none relative">
          <div ref={calendarRef} id="calendar" className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default FullCalendarComponent;
