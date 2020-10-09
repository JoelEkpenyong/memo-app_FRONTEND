import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <header className="d-flex justify-content-end align-items-center">
        <nav>
          <Switch>
            <Route exact path={['/', '/register']}>
              <Link to='/login' className="btn btn_primary"> Log in</Link>
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
