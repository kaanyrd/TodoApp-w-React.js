import React from 'react'
import List from "./List/List"

function Content() {
    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>
                <List />
            </section>
        </div>
    )
}

export default Content
