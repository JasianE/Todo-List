import React from 'react'

function AsideProject(props){
    return(
        <div className = {props.a === props.name ? 'active' : 'asideProject'}> 
            <div onClick = {() => {props.changeProject(props.name)}}>
                <h1 className = 'marginLeft'>{props.name}</h1>
            </div>
            {props.name !== 'Inbox' ? <button className = 'button' onClick = {() => {props.delete(props.name)}}>Delete</button> :
            null
            }
            
        </div>
    )
}

export default AsideProject