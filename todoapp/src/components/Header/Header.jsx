import React from 'react'
import NewTodo from './TodoInput/NewTodo'

function Header() {
    return (
        <div>
            <header className="header">
                <h1 style={{color:"tomato"}}>My Todo's</h1>
                <NewTodo />
            </header>
        </div>
    )
}

export default Header
