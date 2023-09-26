import React, { useState, useEffect } from 'react'

const ActualHour = () => {

    const fecha = new Date();

    const [hour, setHour] = useState(fecha.toLocaleString().split(",")[1])

    useEffect(() => {
      const interval = setInterval(()=>{
        const fecha = new Date();
        const hour = fecha.toLocaleString().split(",")[1];
        setHour(hour)
      },1000)
      return () => clearInterval(interval);
    }, [])
    
  return (
    <>
    {hour}
    </>
  )
}

export default ActualHour