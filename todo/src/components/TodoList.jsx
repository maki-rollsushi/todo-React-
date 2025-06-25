import { TodoCard } from "./TodoCard"

export function TodoList(props){
    const{ todos, selectTab } = props
    const tab = selectTab
    const filterTodo = tab=== 'All' ? 
    todos :
    tab === 'Completed' ?
        todos.filter(val => val.complete) : 
        todos.filter(val => !val.complete)


    return (
        <>
            {filterTodo.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                    key={todoIndex}
                    todoIndex = {todos.findIndex(val => val.input == todo.input)}
                    {...props} 
                    todo = {todo}/>
                )
            })}
        </>
    )
}