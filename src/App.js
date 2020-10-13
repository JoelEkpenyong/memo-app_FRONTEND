import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { AuthContext, AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import Nav from './components/Nav';
import Landing from './Pages/Landing';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard';


const AuthenticatedRoute = ({children, ...rest}) => {
  const authContext = useContext(AuthContext)
  return (
    <Route {...rest}  render={() => (
      authContext.isAuthenticated() ? children : (<Redirect to="/" />)
    )}/>
  )
}

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Nav />
        <Landing />
      </Route>
      <AuthenticatedRoute path ='/dashboard'>
        <Dashboard />
      </AuthenticatedRoute>
      <Route path = '/register'>
        <Nav />
        <Register />
      </Route>
      <Route path = '/login'>
        <Nav />
        <Login />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <FetchProvider>
            <AppRoutes />
          </FetchProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
