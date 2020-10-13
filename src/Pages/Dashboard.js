import React, {useState, useEffect} from 'react'
import '../css/Dashboard.css'
import SideNav from '../components/SideNav'

const Dashboard = () => {
  const [todos, setTodos] = useState({})
  const [tabs, setTabs] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [currentTab, setCurrentTab] = useState('tasks')
  const [showAll, setShowAll] = useState(false)

  const initalTodoObj = () => {
    let obj = tabs.reduce((acc, nxt) => {
        return {
            ...acc, [nxt.split(' ').join('')]: []
        }
    }, {})

    setTodos(obj)
  }

  useEffect(initalTodoObj, [])

  const displayTodos = () => {
    if(!showAll) {
      try{
        return (
            todos[currentTab.split(' ').join('')].map((todo, idx) => (
            <span key={idx} className="todo d-flex align-items-center">
              <input type="checkbox" className="completed"/>
              <p className="m-0 pl-4">{todo}</p>
            </span> 
          )
        ))}catch{
          return (
            <div className="no_tasks">
              <p>No Tasks Yet</p>
            </div>
          )
        }
  } else {
    let entries = Object.entries(todos)
    let list
    let row = []
    for (const[title, todos] of entries) {
      list = todos.map((todo, idx) => (
        <span key={idx} className="todo d-flex align-items-center">
          <input type="checkbox" className="completed"/>
          <p className="m-0 pl-4">{todo}</p>
        </span>
      ));

      row.push(<p key={title} className="tab_name m-0">{title}</p>, list)
  }
  return(
    <>
      {row}
    </>
  )
}}

  const addNewTodo = (e) => {
    e.preventDefault()
    if(newTodo !== '') {
    let activeTab = currentTab.split(' ').join('')
    let currentTodoObj = todos[activeTab] 
    setTodos({...todos, [activeTab]: [...currentTodoObj, newTodo]})
    setNewTodo('') }
  }


  return (
    <div className="dashboard_wrapper">
     <SideNav tabs={tabs} setTabs={setTabs} setCurrentTab={setCurrentTab} setTodos={setTodos} todos={todos} setShowAll={setShowAll} showAll={showAll} />
      <main className="p-5">
        <h3 className="title pb-3" style={{textTransform: 'capitalize'}}>{showAll? `All Tasks` :currentTab}</h3>
        <form className="w-100 position-relative" onSubmit={addNewTodo}>
          <input className="task_input w-100" type="text" value={newTodo} placeholder="Add Task" onChange={(e) => (setNewTodo(e.target.value))} />
          <button className="new_task-btn">+</button>
        </form>
        <div className="todos py-5 d-inline-flex flex-column w-100">
          {displayTodos()}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
