import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import {useState, useEffect} from 'react'


function App() {
  //immutable
  const [todos, setTodos] = useState([
  ])
  //dependency array
  function saveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  const [selectTab, setSelectTab] = useState('Open')

  //handler function
  function addTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    saveData(newTodoList)
  }
  function completeTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    saveData(newTodoList)
  }
  function deleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    saveData(newTodoList)
  }

  return (
    <>
      <Header todos ={todos}/>
      <Tabs 
        selectTab={selectTab} 
        setSelectTab = {setSelectTab} 
        todos ={todos}/>
      <TodoList 
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
      selectTab={selectTab}
      todos ={todos}/>
      <TodoInput addTodo={addTodo}/>
    </>
  )
}

export default App
