import React, { useState, useEffect } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      const interval = setInterval(()=>{
        const fecha = new Date();
        const hour = fecha.toLocaleString().split(",")[1];
        setHour(hour)
      },1000)
    }, [])
    
  return (
    <>
    {hour}
    </>
  )
}

export default ActualHour