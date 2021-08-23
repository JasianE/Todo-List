import React, {useState} from 'react'
import Nav from './Nav'
import Aside from './Aside'
import Main from './Main'
import Todo from './Todo'

//Contains state for tooos and projects
//Hosts the aside for projects and the main area

function Overlay(){
    const [toDos, setToDos] = useState([])
    //Can't have projects with the same name
    const [projects, setProjects] = useState(['Inbox'])
    //After setting activeporject overlay maps through projects and finds which one is the correct one and displays it
    //It then searches through todos and lists them with the correct project: 'ie' key property
    const [activeProject, setActiveProject] = useState('Inbox')

    function changeProjects(name, e){
        setProjects([name, ...projects])
    }
    function changeActiveProject(name){
        setActiveProject(name)
    }
    function changeToDos(newTodo){
        setToDos([newTodo, ...toDos])
    }
    function finished(todo,inbox){
        let x;
        for(let j = 0; j < toDos.length; j++){
            if(toDos[j].name === todo && toDos[j].project === inbox){
                x = toDos[j]
            }
        }
        toDos.splice(toDos.indexOf(x),1)
        let p = [...toDos]
        setToDos(p)
        
    }
    function deleteProject(name){
        projects.splice(projects.indexOf(name), 1)
        let d = [...projects]
        const newTodos = toDos.filter((key) => {
            return(key.project !== name)
        })
        setToDos(newTodos)
        setProjects(d)
        setActiveProject('Inbox')
    }

    return(
        <div>
            <Nav />
            <Aside projects = {projects} changeProjects = {changeProjects} changeActiveProject = {changeActiveProject} a = {activeProject} delete = {deleteProject}/>
            <Main projects = {projects} toDos = {toDos} activeProject = {activeProject} changeToDos = {changeToDos} finished = {finished} />
        </div>
    )
}

export default Overlay