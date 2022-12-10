import React from 'react'
import { useTodo } from '../../../context/TodoContext'

let filtered = null;

function ListItem() {

  const { todos, completedTask, deletedTask, filter } = useTodo()

  const onChange = (id) => {
    completedTask(id)
  }

  const onDestroy = (id) => {
    deletedTask(id)
  }
  filtered = todos
  if (filter !== "all"){
    filtered = todos.filter((todo)=> filter === "active"
    ? todo.completed === false 
    : todo.completed === true 
    )
  }
  return (
    <div>
      {filtered.map((todo) => <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
          <label>{todo.text}</label>
          <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
        </div>
      </li>)}
    </div>
  )
}

export default ListItem
