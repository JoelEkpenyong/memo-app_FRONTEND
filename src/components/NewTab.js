import React, {useState} from 'react'
import '../css/NewTab.css'

const NewTab = ({setTabs, tabs, setTodos, todos, setCurrentTab}) => {
  const [inputValue, setInputValue] = useState('')

  const addTabs = (e) => {
    e.preventDefault();
    setTabs([...tabs, inputValue])
    setCurrentTab(inputValue)
    setInputValue('')
  }

  const updateTodoObj =() => {
    setTodos({...todos, [inputValue.split(' ').join('')]: []})
  }

  return (
    <form className="position-relative new_task-form" onSubmit={(e) => {addTabs(e); updateTodoObj()}}>
      <input type="text"  placeholder="Enter a name" className="new_task-input w-100" value={inputValue} onChange={(e) => (setInputValue(e.target.value))}/>
      <button>Save</button>
  </form>
  )
}

export default NewTab
