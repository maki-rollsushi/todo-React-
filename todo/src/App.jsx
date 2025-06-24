import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import {useState} from 'react'


function App() {

  // const todos = [
  //   { input: 'Feed the Cat', complete: false},
  //   { input: 'Walk the Dog', complete: true},
  //   { input: 'Feed the Bords', complete: false},
  // ]

  //immutable
  const [todos, setTodos] = useState([
     { input: 'Feed the Cat', complete: false},
     { input: 'Walk the Dog', complete: true},
     { input: 'Feed the Birds', complete: false}
  ])

  //handler function
  function addTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }
  function editTodo() {

  }
  function deleteTodo() {

  }

  return (
    <>
      <Header todos ={todos}/>
      <Tabs todos ={todos}/>
      <TodoList todos ={todos}/>
      <TodoInput addTodo={addTodo}/>
    </>
  )
}

export default App
