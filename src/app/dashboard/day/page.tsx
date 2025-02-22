'use client';

import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

const FullCalendarComponent = () => {
  const calendarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new Calendar(calendarRef.current, {
        plugins: [dayGridPlugin, listPlugin],
        initialView: 'listWeek',
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridWeek,dayGridDay,listWeek',
        },
      });
      calendar.render();
    }
  }, []);

  return <div ref={calendarRef} id="calendar" className=" max-l-500  border rounded-lg p-4 bg-gray-500" />;
};

export default FullCalendarComponent;
