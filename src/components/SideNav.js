import React, {useState, useContext} from 'react'
import NewTab from './NewTab'
import '../css/SideNav.css'
import TabLists from './TabLists'
import { AuthContext } from '../context/AuthContext'

const SideNav = ({tabs, setTabs, toggleNav, setCurrentTab, setTodos, todos, setShowAll, showAll, getList}) => {
  const [showForm, setShowForm] = useState(false)
  const auth = useContext(AuthContext)
  const {authState} = auth
  return (
    <header>
      <nav id="side_nav" className="d-inline-flex flex-column">
        <div className="padded d-inline-flex flex-column">
          <div className="d-flex align-items-center justify-content-between w-100">
            <span className="d-flex align-items-center">
              <h5 className="username">{authState.data.fullname}</h5>
            </span>
            <div className="hamburger pr-3" style={{fontSize: '2.5rem'}} onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M2 5.995c0-.55.446-.995.995-.995h8.01a.995.995 0 0 1 0 1.99h-8.01A.995.995 0 0 1 2 5.995z" fill="#2D9CDB"/>
                  <path d="M2 12c0-.55.446-.995.995-.995h18.01a.995.995 0 1 1 0 1.99H2.995A.995.995 0 0 1 2 12z" fill="#2D9CDB"/>
                  <path d="M2.995 17.01a.995.995 0 0 0 0 1.99h12.01a.995.995 0 0 0 0-1.99H2.995z" fill="#2D9CDB"/>
                </g>
              </svg>
            </div>
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
        <button className="sideNav_btn active" onClick={() => {showAll? setShowAll(false) : setShowAll(true); toggleNav()}}>
          <svg className="mr-4" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6 0.619995C17.16 0.619995 15.8 1.17999 14.83 2.14999L12 4.66L10.48 6H10.49L7.8 8.39C7.16 9.03 6.31 9.38 5.4 9.38C3.53 9.38 2.01 7.87 2.01 6C2.01 4.13 3.53 2.62 5.4 2.62C6.31 2.62 7.16 2.96999 7.84 3.64999L8.97 4.64999L10.48 3.31L9.22 2.2C8.2 1.18 6.84 0.619995 5.4 0.619995C2.42 0.619995 0 3.04 0 6C0 8.96 2.42 11.38 5.4 11.38C6.84 11.38 8.2 10.82 9.17 9.85L12 7.35L12.01 7.35999L13.52 6H13.51L16.2 3.60999C16.84 2.97 17.69 2.62 18.6 2.62C20.47 2.62 21.99 4.13 21.99 6C21.99 7.87 20.47 9.38 18.6 9.38C17.7 9.38 16.84 9.03 16.16 8.35L15.02 7.34L13.51 8.68L14.78 9.8C15.8 10.81 17.15 11.37 18.6 11.37C21.58 11.37 24 8.96 24 5.99C24 3.01999 21.58 0.619995 18.6 0.619995Z" fill="#2D9CDB"/>
          </svg>
          All Tasks
          </button>
        <div className="padded py-0">
          <hr style={{borderTop: '1px solid #333', backgroundColor: '#333'}}/>
          <span className="d-flex justify-content-between align-items-center"><p className="py-4 m-0">Personal Lists</p> <button className="new_list-btn" onClick={() => (showForm ? setShowForm(false) : setShowForm(true))}>+</button></span>
          {showForm && <NewTab setTabs={setTabs} tabs={tabs} setTodos={setTodos} todos={todos} setCurrentTab={setCurrentTab} getList={getList}  />}
        </div>
          <TabLists tabs={tabs} toggleNav={toggleNav} setCurrentTab={setCurrentTab} setTodos={setTodos} todos={todos} setShowAll={setShowAll} showForm={showForm}/>
        <button className="logout_btn mt-auto mb-5" onClick={auth.logout}>
        <svg className="mr-3" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.96057 3.70801C4.20469 3.95205 4.20476 4.34778 3.96072 4.59189C3.26162 5.29122 2.78558 6.18214 2.59278 7.152C2.39999 8.12186 2.4991 9.12711 2.87759 10.0406C3.25607 10.9542 3.89694 11.735 4.71915 12.2843C5.54136 12.8336 6.50799 13.1269 7.49683 13.1269C8.48567 13.1269 9.4523 12.8336 10.2745 12.2843C11.0967 11.735 11.7376 10.9542 12.1161 10.0406C12.4946 9.12711 12.5937 8.12186 12.4009 7.152C12.2081 6.18214 11.732 5.29122 11.0329 4.59189C10.7889 4.34778 10.789 3.95205 11.0331 3.70801C11.2772 3.46397 11.6729 3.46404 11.917 3.70815C12.7908 4.58231 13.3859 5.69596 13.6269 6.90829C13.8679 8.12061 13.744 9.37718 13.2709 10.5191C12.7978 11.661 11.9967 12.637 10.9689 13.3237C9.94117 14.0103 8.73288 14.3769 7.49683 14.3769C6.26078 14.3769 5.05249 14.0103 4.02473 13.3237C2.99696 12.637 2.19589 11.661 1.72278 10.5191C1.24967 9.37718 1.12578 8.12061 1.36677 6.90829C1.60776 5.69596 2.20282 4.58231 3.07669 3.70815C3.32073 3.46404 3.71646 3.46397 3.96057 3.70801Z" fill="#4F4F4F"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.625C7.84518 0.625 8.125 0.904822 8.125 1.25V7.5C8.125 7.84518 7.84518 8.125 7.5 8.125C7.15482 8.125 6.875 7.84518 6.875 7.5V1.25C6.875 0.904822 7.15482 0.625 7.5 0.625Z" fill="#4F4F4F"/>
        </svg>
        log out
        </button>
      </nav>
    </header>
  )
}

export default SideNav
