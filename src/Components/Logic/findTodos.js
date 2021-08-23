//Takes in active project and todos array
//Loops through todos array to compile which todos are made under the project
//Returns the correct array of Todos
//this is just arr.map((key) => {
//key['project'] === activeProject ? return key : null
//})

function findTodos(active, todos){
    function boo(){
        return 'roflcopter'
    }
    const correctTodos = []
    for(let i = 0; i < todos.length; i++){
        todos[i]['project'] === active ? correctTodos.push(todos[i]) : boo()
    }

    return correctTodos
}

export default findTodos