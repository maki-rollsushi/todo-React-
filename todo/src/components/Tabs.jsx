export function Tabs(props){
    const {todos, selectTab, setSelectTab} = props

    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className="tab-container">

            {tabs.map((tab, tabIndex)=>{
                const numTask = tab === 'All' ?
                todos.length : tab==='Open'?
                todos.filter(val => !val.complete).
                length : todos.filter(val => val.complete).length
                return (
                    <button onClick={() =>{setSelectTab(tab)}}
                        key={tabIndex}
                        className={"tab-button " + (tab === selectTab ? "tab-selected" : " ")}>
                        <h4>{tab}<span> ({numTask})</span></h4>
                    </button>
                )
            })}
            <hr></hr>
        </nav>
    )
}