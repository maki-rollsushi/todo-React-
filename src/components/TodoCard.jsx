export function TodoCard(props){
    const { todo, deleteTodo, todoIndex, completeTodo } = props
    console.log(todo)
    return (
        <div className = "card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    completeTodo(todoIndex)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick = {() => {
                    deleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}