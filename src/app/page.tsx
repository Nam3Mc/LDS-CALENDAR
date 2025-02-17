'use client'

// import Login from '../components/loging.tsx'
// import Header from '../components/navbar.tsx'
import { useState, useEffect } from "react";


// export default function index() {
  // return (
    // <div>
{/*        */}
       {/* <Header /> */}
      {/* <div> */}
      {/* <Login/> */}
      {/* </div> */}
{/*  */}
    {/* </div> */}
// 
  // )
// }

export default function test( ) {
    const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
    const today = new Date()
    const [ selectedDay, setSelectedDay] = useState(today)
    const [ events, setEvents ] = useState({})
    const hoursAM = Array.from({ length: 12 }, (_, i) => `${i + 0}:00 AM`)
    const hoursPM = Array.from({ length: 12 }, (_, i) => `${i + 12}:00 PM`)



    return (
      <div>
        pending
      </div>

    )
    
    
}