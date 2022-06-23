import './index.css'

const TodoItem = props => {
  const {userDetails} = props
  const {title} = userDetails

  return (
    <li>
      <div className="ch">
        <p className="user-name"> {title} </p>
        <button type="button" className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
