import React, {useState, useEffect} from 'react'
import ModalUserData from './ModalUserData'
import ActualHour from './ActualHour'

const UserList = () => {

    const [usersData, setUsersData] = useState([])

    useEffect(() => {
      apiCall()
    }, [])

    const apiCall = async () =>{
        try{
            const call = await fetch(`https://randomuser.me/api/?results=50`);
            const data = await call.json();
            setUsersData(data.results)

        }catch(error){"error detected", error}
    }

    const showUserList = usersData.map((actualElement)=>{
        return(
            <>
            <ul key={actualElement.id.value}>
                <li>{actualElement.name.first} {actualElement.name.last} 
                <ModalUserData user={actualElement}></ModalUserData>
                </li>
            </ul>
            </>
        )
    })
    
  return (
    <>
    <ActualHour></ActualHour>
    {showUserList}
    </>
  )
}

export default UserList