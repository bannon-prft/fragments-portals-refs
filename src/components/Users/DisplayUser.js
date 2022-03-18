import Card from '../UI/Card'
import DisplayBox from '../UI/DisplayBox'
import styles from './DisplayUser.module.css'

const DisplayUser = (props) => {
  return (
    <Card>
      <ul className={styles.userList}>
        {props.list.map((item) => (
          <DisplayBox  item={item} key={item.id} />
        ))}
      </ul>
    </Card>
  )
}

export default DisplayUser
