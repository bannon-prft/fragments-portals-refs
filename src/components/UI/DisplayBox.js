import styles from './DisplayBox.module.css'

const DisplayBox = (props) => {
  const { username, age, id } = props.item
  return (
    <li className={styles.listItem}>
      {username} ({age} years old)
    </li>
  )
}

export default DisplayBox