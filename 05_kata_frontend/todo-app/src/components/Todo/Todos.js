import { useState } from 'react'
import Todo from './Todo'


const CreateTodo = (props) => {

    const [newTodo, setNewTodo] = useState("")

    return (
        <div>
            <input type="text" placeholder="Agrega un texto" onChange={e => setNewTodo(e.target.value)}/>
            <button type="button" onClick={() => {props.addTodo(newTodo)}}>Agregar</button>
        </div>
    )


}


const Todos = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Repasar ReactHooks',
            isComplete: false
        },
        {
            text: 'Kata JS',
            isComplete: true
        }
    ])

const setComplete = (index) => {
    const myTodos = [...todos]
    const isComplete = myTodos[index].isComplete
    myTodos[index].isComplete = !isComplete
    setTodos(myTodos)
}



const addTodo = (todoText) => {
    const myTodos = [
        ...todos,
        {text: todoText, isComplete: false}
    ]
    setTodos(myTodos)
}

    return(
        <>
        <h1>Todos App</h1>
        <CreateTodo addTodo={addTodo} />
        {
            todos.map((todo, index) => {
                return <Todo
                    key={index}
                    index={index}
                    text={todo.text}
                    isComplete={todo.isComplete}
                    setComplete={setComplete}
                />
            })
        }

        </>
    )


    }

    export default Todos

