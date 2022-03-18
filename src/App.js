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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <DisplayUser list={userList} />
    </div>
  )
}

export default App
