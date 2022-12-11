// THERE ARE FILTERS FOR TODOS

import React from 'react'
import {useTodo} from "../../context/TodoContext"

function ContentFooter() {
    const {todos, setTodos, filter, setFilter} = useTodo()

    const clearCompleted = ()=>{
        const clone = [...todos]
        const filters = clone.filter((todo)=> !todo.completed)
        setTodos(filters)
    }


    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.length} </strong>
                    item{todos.length > 1 ? "s" : ""} left
                </span>

                <ul className="filters">
                    <li>
                        <a onClick={()=> setFilter("all")} href="#/" className={filter === "all" ? "selected" : ""}>All</a>
                    </li>
                    <li>
                        <a onClick={()=> setFilter("active")} href="#/" className={filter === "active" ? "selected" : ""}>Active</a>
                    </li>
                    <li>
                        <a onClick={()=> setFilter("completed")} href="#/" className={filter === "completed" ? "selected" : ""}>Completed</a>
                    </li>
                </ul>

                <button onClick={()=> clearCompleted()} className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default ContentFooter
