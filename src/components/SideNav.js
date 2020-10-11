import React, {useState} from 'react'
import NewTab from './NewTab'
import './SideNav.css'
import TabLists from './TabLists'

const SideNav = ({tabs, setTabs, setCurrentTab, setTodos, todos, setShowAll, showAll}) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <header>
    <nav id="side_nav" className="d-inline-flex flex-column">
      <div className="padded d-inline-flex flex-column">
        <div className="d-flex align-items-center justify-content-between w-100">
          <span className="d-flex align-items-center">
            <div className="img_wrapper mr-4">
              <img src={'imgs/profile.jpg'} alt="User Profile"/>  
            </div>
            <h5 className="username">Joel Ekpenyong</h5>
          </span>
          <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00001 16.3334C7.91668 16.3334 8.66668 15.5834 8.66668 14.6667H5.33334C5.33334 15.5834 6.07501 16.3334 7.00001 16.3334ZM12 11.3334V7.16671C12 4.60837 10.6333 2.46671 8.25001 1.90004V1.33337C8.25001 0.641707 7.69168 0.083374 7.00001 0.083374C6.30834 0.083374 5.75001 0.641707 5.75001 1.33337V1.90004C3.35834 2.46671 2.00001 4.60004 2.00001 7.16671V11.3334L0.333344 13V13.8334H13.6667V13L12 11.3334Z" fill="#4F4F4F"/>
          </svg>
        </div>
        <form className="search_form w-100 position-relative">
          <label htmlFor="search">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.4 1.2C3.0804 1.2 1.2 3.0804 1.2 5.4C1.2 7.7196 3.0804 9.6 5.4 9.6C7.7196 9.6 9.6 7.7196 9.6 5.4C9.6 3.0804 7.7196 1.2 5.4 1.2ZM0 5.4C0 2.41766 2.41766 0 5.4 0C8.38234 0 10.8 2.41766 10.8 5.4C10.8 8.38234 8.38234 10.8 5.4 10.8C2.41766 10.8 0 8.38234 0 5.4Z" fill="#4F4F4F"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.36574 8.36574C8.60005 8.13142 8.97995 8.13142 9.21426 8.36574L11.8243 10.9757C12.0586 11.2101 12.0586 11.59 11.8243 11.8243C11.59 12.0586 11.2101 12.0586 10.9757 11.8243L8.36574 9.21426C8.13142 8.97995 8.13142 8.60005 8.36574 8.36574Z" fill="#4F4F4F"/>
            </svg>
          </label>
          <input type="text" placeholder="Search" id="search" className="w-100 search_field"/>
        </form>
      </div>
      <button className="sideNav_btn active" onClick={() => (showAll? setShowAll(false) : setShowAll(true))}>
        <svg className="mr-4" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6 0.619995C17.16 0.619995 15.8 1.17999 14.83 2.14999L12 4.66L10.48 6H10.49L7.8 8.39C7.16 9.03 6.31 9.38 5.4 9.38C3.53 9.38 2.01 7.87 2.01 6C2.01 4.13 3.53 2.62 5.4 2.62C6.31 2.62 7.16 2.96999 7.84 3.64999L8.97 4.64999L10.48 3.31L9.22 2.2C8.2 1.18 6.84 0.619995 5.4 0.619995C2.42 0.619995 0 3.04 0 6C0 8.96 2.42 11.38 5.4 11.38C6.84 11.38 8.2 10.82 9.17 9.85L12 7.35L12.01 7.35999L13.52 6H13.51L16.2 3.60999C16.84 2.97 17.69 2.62 18.6 2.62C20.47 2.62 21.99 4.13 21.99 6C21.99 7.87 20.47 9.38 18.6 9.38C17.7 9.38 16.84 9.03 16.16 8.35L15.02 7.34L13.51 8.68L14.78 9.8C15.8 10.81 17.15 11.37 18.6 11.37C21.58 11.37 24 8.96 24 5.99C24 3.01999 21.58 0.619995 18.6 0.619995Z" fill="#2D9CDB"/>
        </svg>
        All Tasks
        </button>
      <div className="padded py-0">
        <hr style={{borderTop: '1px solid #333', backgroundColor: '#333'}}/>
        <span className="d-flex justify-content-between align-items-center"><p className="py-4 m-0">Personal Lists</p> <button className="new_list-btn" onClick={() => (showForm ? setShowForm(false) : setShowForm(true))}>+</button></span>
        {showForm && <NewTab setTabs={setTabs} tabs={tabs} setTodos={setTodos} todos={todos} />}
      </div>
        <TabLists tabs={tabs} setCurrentTab={setCurrentTab} setTodos={setTodos} todos={todos} setShowAll={setShowAll} showForm={showForm} />
    </nav>
  </header>
  )
}

export default SideNav
