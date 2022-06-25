import './index.css'

const TodoItem = props => {
  const {userDetails, Delete} = props
  const {id, title} = userDetails

  const onDelete = () => {
    Delete(id)
  }

  return (
    <li>
      <div className="ch">
        <p className="user-name"> {title} </p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
