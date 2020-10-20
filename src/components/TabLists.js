import React from 'react'
// import NewTab from './NewTab'
import '../css/TabLists.css'


const TabLists = ({tabs, setCurrentTab, setShowAll}) => {
  const getTab = (idx) => {
    let tab = tabs[idx].title
    setCurrentTab(tab)
  }

  const tablist = tabs.map((obj, idx) => (
    <li key={obj.id} className="d-flex align-items-center todo_tabs" onClick={() => (setShowAll(false))}>
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z" fill="#2D9CDB"/>
      </svg>
      <button className="task" style={{textTransform: 'capitalize'}}onClick={() => ( getTab(idx) )}>{obj.title}</button>
    </li>
  ))

  return (
    <>
      <ul className="task_list">
        {tablist}
      </ul>
    </>
  )
}

export default TabLists
