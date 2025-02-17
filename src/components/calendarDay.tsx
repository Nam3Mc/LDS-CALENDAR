'use client'

import { useState, useEffect } from "react"

export default function DayView() {
    const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
    const today = new Date()
    const [ selectedDay, setSelectedDay] = useState(today)
    const [ events, setEvents ] = useState({})
    const hoursAM = Array.from({ length: 12 }, (_, i) => `${i + 0}:00 AM`)
    const hoursPM = Array.from({ length: 12 }, (_, i) => `${i + 12}:00 PM`)

    return (

        <div>
            <h2>
                {selectedDay.toLocaleString('es-Es', {weekday: 'long'}).toUpperCase() }
            </h2>

            <div>
                {[hoursAM, hoursPM].map(hours, idx) => (
                    <div key={idx}>

                        <h3>
                            {idx === 0 ? 'MORNING' : 'AFTERNOON'}
                        </h3>

                        <div>
                            {events[`${selectedDay.toDateString()}-${hour}`] || ''}
                        </div>

                    </div>
                )} 
            </div>

        </div>

    )
    
    
}