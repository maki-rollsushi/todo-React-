export function Header(props){
    const {todos} = props
    const todoLength = todos.length
    const moreThanOne = todoLength != 1
    const task = moreThanOne ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todoLength} open {task}.</h1>
        </header>
    )
}