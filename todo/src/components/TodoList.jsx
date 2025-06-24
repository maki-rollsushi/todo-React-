import { TodoCard } from "./TodoCard"

export function TodoList(props){
    const{ todos } = props
    const tab = 'All'
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
                    todo = {todo}/>
                )
            })}
        </>
    )
}