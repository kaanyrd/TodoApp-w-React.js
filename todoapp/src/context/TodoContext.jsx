import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([{
        id: 1,
        text: "Learn React",
        completed: true
    }])
    const addTodos = (text) => {
        setTodos((prev) => [...prev, { id: uuidv4(), text, completed: false }])
    }
    const completedTask = (id) => {
        const cloned = [...todos]
        const index = cloned.findIndex((todo) => todo.id === id)
        const item = todos[index]
        item.completed = !item.completed
        setTodos(cloned)
    }
    const deletedTask = (id) =>{
        const cloned = [...todos]
        const index = cloned.findIndex((todo)=> todo.id === id)
        cloned.splice(index, 1)
        setTodos(cloned)
    }
    const [filter, setFilter] = useState("all")

    const values = {
        todos,
        setTodos,
        addTodos,
        completedTask,
        deletedTask,
        filter,
        setFilter
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}
export const useTodo = () => {
    const context = useContext(TodoContext)

    if (context === undefined) {
        throw new Error("useTodo() contexti yanlış şekilde kullanıldı!")
    }
    return context
}

export default TodoContext