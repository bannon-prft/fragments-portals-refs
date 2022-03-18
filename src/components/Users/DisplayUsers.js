import Card from '../UI/Card'
import styles from './DisplayUsers.module.scss'

const DisplayUser = (props) => {
  return (
    <Card className={styles.userList}>
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>{item.username} ({item.age} years old)</li>
        ))}
      </ul>
    </Card>
  )
}

export default DisplayUser
