// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodoItem} = props
  const {id, title} = itemDetails

  const onClickDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo-item">
      <p className="todo">{title}</p>
      <div>
        <button type="button" className="button" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
