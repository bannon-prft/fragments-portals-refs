import { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.scss'

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isValidUser, setIsValidUser] = useState(false)
  const [isValidAge, setIsValidAge] = useState(false)
  const [error, setError] = useState()

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (!isValidUser || !isValidAge) {
      setError({
        title: 'Invalid input',
        message:
          'Please enter a valid name and age (non-empty values), and age (> 0)',
      })
      return
    }
    props.onAddUser({ user: enteredUser, age: enteredAge })
    setEnteredUser('')
    setEnteredAge('')
    setIsValidUser(false)
    setIsValidAge(false)
  }

  // why do these not run again when formSubmitHandler changes the values
  const userInputChangeHandler = (event) => {
    setIsValidUser(event.target.value.trim().length > 0 ? true : false)
    setEnteredUser(event.target.value)
  }

  const ageInputChangeHandler = (event) => {
    setIsValidAge(event.target.value > 0 ? true : false)
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUser}
            onChange={userInputChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageInputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
