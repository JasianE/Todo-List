import React from 'react'
import Taskform from './Taskform'
import findTodos from './Logic/findTodos'
import Todo from './Todo'

function Main(props){
    const displays = findTodos(props.activeProject, props.toDos)
    let i = 0; 
    return(
        <div className = 'main'>
            <h1 className = 'overLay'>{props.activeProject}</h1>
            <div className = 'taskform'>
                <Taskform changeToDos = {props.changeToDos} active = {props.activeProject}/>
            </div>
            <div className = 'todoBox'>
                {displays.map((key) => {
                    i++
                    return(<Todo todo = {key} key = {i} finished = {props.finished}/>)
                })}
            </div>
        </div>
    )
}

export default Main