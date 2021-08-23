import React, {useState} from 'react'

function Projectform(props){
    const [projectName, setProjectName] = useState('')

    function handleChange(e){
        const value = e.target.value
        setProjectName(value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(projectName === 'Inbox' || props.projects.indexOf(projectName) !== -1){
            alert('Please Choose Another Project Name.')
            return false
        }
        props.changeProjects(projectName, false)
        props.handleClick(false)
    }
    return(
        <form autoComplete = 'off' onSubmit = {handleSubmit}>
            <input 
            type = 'text'
            className = 'form text'
            value = {projectName}
            placeholder = 'Project Name'
            onChange = {handleChange}
            required
            />
            <input 
            type = 'submit'
            value = 'Submit'
            className = 'submit two'
            />
        </form>
    )
}
export default Projectform