import React from 'react'

const RefreshUsers = ({apiCall}) => {

  return (
    <>
    <button onClick={()=>{apiCall()}}>refrescar</button>
    </>
  )
}

export default RefreshUsers