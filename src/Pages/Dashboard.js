import React, {useState, useEffect, useContext} from 'react'
import '../css/Dashboard.css'
import SideNav from '../components/SideNav'
import { FetchContext } from '../context/FetchContext'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
  const fetchContext = useContext(FetchContext)
  const authContext = useContext(AuthContext)
  const {config} = fetchContext;
  const {authAxios} = fetchContext
  const {authState} = authContext
  const [allData, setAllData] = useState([])
  const lists = localStorage.getItem('Lists')
  const [todos, setTodos] = useState({})
  const [tabs, setTabs] = useState(lists? JSON.parse(lists): [])
  const [newTodo, setNewTodo] = useState('')
  const [currentTab, setCurrentTab] = useState('tasks')
  const [showAll, setShowAll] = useState(false)
  const [payload, setPayload] = useState({author: authState.data.userId})


  const getList = async () => {
    try{
      const {data} = await authAxios.get(`/lists/get-lists?userId=${authState.data.userId}`, config)
      const arr = []
      const dataArr = []
      console.log(data)
      data.data.map((obj)=> {
        let {title, createdTasks} = obj
        let id = obj._id
        title = title.toLowerCase()
        dataArr.push({createdTasks, title, id})
        arr.push({title, id})
        return (dataArr, arr)
      })
      setTabs([...arr])
      setAllData(dataArr)
      localStorage.setItem('Lists', JSON.stringify(arr))

    }catch(err){
      console.log(err.message) 
    }
  
  }

  const initalTodoObj = () => {
    let tasks = allData.reduce((acc, nxt) => {
      let {title, createdTasks} = nxt
      return {
        ...acc, [title.split(' ').join('')]: createdTasks
      }
    }, {})
    setTodos(tasks)
  }

  const init = () => {
     getList()
     initalTodoObj()
  }

  useEffect(init, [])


  useEffect(initalTodoObj, [allData])

  const displayTodos = () => {
    if(!showAll) {
      try{
        return (
            todos[currentTab.split(' ').join('')].map((todoObj) => (
            <span key={todoObj._id} className="todo d-flex align-items-center">
              <input type="checkbox" className="completed"/>
              <p className="m-0 pl-4">{todoObj.title}</p>
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
    for (const[title, createdTasks] of entries) {
      list = createdTasks.map((todoObj) => (
        <span key={todoObj._id} className="todo d-flex align-items-center">
          <input type="checkbox" className="completed"/>
          <p className="m-0 pl-4">{todoObj.title}</p>
        </span>
      ))

      

      row.push(<p key={title} className="tab_name m-0">{title}</p>, list)
  }
  return(
    <>
      {row}
    </>
  )
}}

  const addNewTodo = async (e) => {
    e.preventDefault()
    if(newTodo !== '') {
    let activeTab = currentTab.split(' ').join('').toLowerCase()
    let listId 
    tabs.map((obj)=> {
      if(activeTab === obj.title){ 
        listId = obj.id
      }
      return listId
    })
    const {data} = await authAxios.post(`/tasks/create-task?listId=${listId}`, payload, config)
    getList()
    setNewTodo('') 
    return data
  }}

  const handleInput = (e) => {
    setNewTodo(e.target.value)
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  const toggleNav  = () => {
    let main = document.querySelector("main")
    let nav = document.querySelector('#side_nav')

    nav.classList.toggle('show')
    main.classList.toggle('hide')
  }



  return (
    <div className="dashboard_wrapper">
     <SideNav tabs={tabs} setTabs={setTabs} toggleNav={toggleNav} setCurrentTab={setCurrentTab} setTodos={setTodos} todos={todos} setShowAll={setShowAll} showAll={showAll} getList={getList} />
      <main className="p-5">
        <div className="d-inline-flex align-items-center justify-content-center pb-3">
          <div className="hamburger pr-3" style={{fontSize: '2.5rem'}} onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M2 5.995c0-.55.446-.995.995-.995h8.01a.995.995 0 0 1 0 1.99h-8.01A.995.995 0 0 1 2 5.995z" fill="#2D9CDB"/>
                <path d="M2 12c0-.55.446-.995.995-.995h18.01a.995.995 0 1 1 0 1.99H2.995A.995.995 0 0 1 2 12z" fill="#2D9CDB"/>
                <path d="M2.995 17.01a.995.995 0 0 0 0 1.99h12.01a.995.995 0 0 0 0-1.99H2.995z" fill="#2D9CDB"/>
              </g>
            </svg>
          </div>
          <h3 className="title m-0" style={{textTransform: 'capitalize'}}>{showAll? `All Tasks` :currentTab}</h3>
        </div>
        <form className="w-100 position-relative my-3" onSubmit={addNewTodo}>
          <input className="task_input w-100" type="text" name="title" value={newTodo} placeholder="Add Task" onChange={handleInput} />
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
