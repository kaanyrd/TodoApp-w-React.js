import React from 'react'
import { useTodo } from '../../../context/TodoContext'

function ListItem() {

    const {todos} = useTodo()

  return (
    <div>
      {todos.map((todo)=> <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed}/>
                    <label>{todo.text}</label>
                    <button className="destroy"></button>
                </div>
            </li>)}
    </div>
  )
}

export default ListItem
