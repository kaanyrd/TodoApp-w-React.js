import React from 'react'
import NewTodo from './TodoInput/NewTodo'

function Header() {
    return (
        <div>
            <header className="header">
                <h1>My Todo's</h1>
                <NewTodo />
            </header>
        </div>
    )
}

export default Header
