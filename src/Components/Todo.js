import React from 'react'
//Takes in props with data (title, description, priority)
//Todo take the projecthe todo was made in and use a passed down function to set it there 

function Todo(props){
    const todo = props.todo
    return(
        <div className = 'dookie'>
            <h1>{todo.name}</h1>
            <h2>{todo.description}</h2>
            <h3>{todo.priority}</h3>
            <button onClick = {() => {props.finished(todo.name, todo.project)}}>Finished</button>
        </div>
    )
}

export default Todo