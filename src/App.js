import { useState } from 'react'

import AddUser from './components/Users/AddUser'
import DisplayUser from './components/Users/DisplayUsers'

const App = () => {
  const [userList, setUserList] = useState([])

  const addUserHandler = (userObject) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { age: userObject.age, username: userObject.user, id: Date.now() },
      ]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <DisplayUser list={userList} />
    </>
  )
}

export default App
