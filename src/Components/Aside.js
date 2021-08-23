import React, {useState} from 'react'
import Projectform from './Projectform'
import AsideProject from './AsideProject'
import './general.css'

//Takes in projects from overlay
//Maps through them each with an onclick method passed by overlay
    //This onclick will take the projects value and name and set it to active project 
    //
function Aside(props){
    const [displayForm, setDisplayForm] = useState(false)
    let i = 0;

    function handleClick(e){
        e ? setDisplayForm(true) : setDisplayForm(false)
    }
    
    return(
        <aside className = 'aside'>
            {props.projects.map((key) => {
                i++
                return(<AsideProject name = {key} key = {i} changeProject = {props.changeActiveProject} a = {props.a} delete = {props.delete}/>)
            })}
            {displayForm ? <Projectform changeProjects = {props.changeProjects} handleClick = {handleClick} projects = {props.projects}/> :
                <div className = 'addproject' onClick = {() => {handleClick(true)}}>
                    <h1 className = 'text add'>Add Project</h1>
                </div>

            }
        </aside>
    )
}

export default Aside