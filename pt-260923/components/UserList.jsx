import React, {useState, useEffect} from 'react'

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
    
  return (
    <div>UserList</div>
  )
}

export default UserList