import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {

  const todos = [
    { input: 'Feed the Cat', complete: false},
    { input: 'Walk the Dog', complete: true},
    { input: 'Feed the Bords', complete: false},
  ]



  return (
    <>
      <Header todos ={todos}/>
      <Tabs todos ={todos}/>
      <TodoList todos ={todos}/>
      <TodoInput todos ={todos}/>
    </>
  )
}

export default App
