import React, {useState, useContext} from 'react'
import { FetchContext } from '../context/FetchContext'
import { AuthContext } from '../context/AuthContext'
import '../css/NewTab.css'

const NewTab = ({setTodos, todos, getList}) => {
  const authContext = useContext(AuthContext)
  const fetchContext = useContext(FetchContext)
  const {authState} = authContext

  const [inputValue, setInputValue] = useState('')
  const [payload, setPayload] = useState({author: authState.data.userId})

  const addTabs = async (e) => {
    e.preventDefault();
    const {config} = fetchContext;
    const {authAxios} = fetchContext
    const {data} = await authAxios.post(`/lists/create-list?`, payload, config)
    console.log(data)
    getList()
    setInputValue('') 
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  const updateTodoObj =() => {
    setTodos({...todos, [inputValue.split(' ').join('')]: []})
  }

  return (
    <form className="position-relative new_task-form" onSubmit={(e) => {addTabs(e); updateTodoObj()}}>
      <input type="text"  placeholder="Enter a name" name="title" className="new_task-input w-100" value={inputValue} onChange={handleInput}/>
      <button>Save</button>
  </form>
  )
}

export default NewTab
