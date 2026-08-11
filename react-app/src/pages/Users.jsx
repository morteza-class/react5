import { useEffect, useState } from "react";
import Loading from "../components/Loading"

const Users = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <h1>Users</h1>

      {
        isLoading ?
          <Loading />
          :
          <ul className='divide-y divide-gray-300 max-w-[300px]'>
            {
              users.map((user) => {
                return (
                  <li key={user.id} className='py-2 hover:bg-gray-800'>
                    <p className='text-lg'>{user.name}</p>
                    <span className='text-base text-gray-500'>{user.email}</span>
                  </li>
                )
              })
            }
          </ul>
      }

    </>
  )
}

export default Users;