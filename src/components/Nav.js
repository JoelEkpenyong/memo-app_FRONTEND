import React, { useContext } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../css/Nav.css'

const Nav = () => {
  const authContext = useContext(AuthContext)
  return (
    <header className="primary_nav d-flex justify-content-end align-items-center">
        <nav>
          <Switch>
            <Route exact path={['/', '/register']}>
              <Link to={authContext.isAuthenticated()? '/dashboard' : '/login'} className="btn btn_primary"> Log in</Link>
            </Route>
            <Route path='/login'>
              <Link to='/register' className="btn btn_primary">Create Account</Link>
            </Route>
          </Switch>
        </nav>
    </header>
  )
}

export default Nav
