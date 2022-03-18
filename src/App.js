import { useState } from 'react'

import AddUser from './components/Users/AddUser'
import DisplayUser from './components/Users/DisplayUser'

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
      <section>
        <AddUser onAddUser={addUserHandler} />
      </section>
      <section>
        <DisplayUser list={userList} />
      </section>
    </div>
  )
}

export default App
