import React, {useState} from 'react'

function Taskform(props){
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(1)
    function handleSubmit(e){
        e.preventDefault()
        const newTodo = {
            name: taskName,
            description: description,
            priority: priority,
            project: props.active
        }
        setTaskName('')
        setDescription('')
        setPriority(1)
        props.changeToDos(newTodo)
    }
    function handleChange(e){
        const {name,value}= e.target
        name === 'desc' ? setDescription(value) : name === 'select' ? setPriority(value) : setTaskName(value)
    }
    return(
        <form autoComplete = 'off' onSubmit = {handleSubmit}>
            <input
            type = 'text'
            className = 'task text'
            value = {taskName}
            placeholder = 'Task Name'
            onChange = {handleChange}
            name = 'name'
            required
            />
            <input 
            type = 'text'
            className = 'task2 text'
            value = {description}
            placeholder = 'Description'
            onChange = {handleChange}
            name = 'desc'
            required
            />
            <select className = 'select' name = 'select' value = {priority} onChange = {handleChange}>
                <option value = '1'>1</option>
                <option value = '2'>2</option>
                <option value = '3'>3</option>
            </select>
            <input 
            type = 'submit'
            value = 'Submit'
            className = 'submit pos3'
            />
        </form>
    )
}

export default Taskform