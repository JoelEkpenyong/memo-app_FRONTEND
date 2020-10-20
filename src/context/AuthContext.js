import React, {useState, createContext} from 'react';
import {useHistory} from 'react-router-dom'

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const history = useHistory()
  const userInfo = localStorage.getItem('userInfo')
  const [authState, setAuthState] = useState({data: userInfo? JSON.parse(userInfo): {}})

  const setAuthInfo = ({data}) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
    setAuthState({data})
  }

  const logout = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('Lists')
    setAuthState({data: {}})
    history.push('/login')
  }

  const isAuthenticated = () => {
    if(!authState.data.token) { return false};
    return true
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => (setAuthInfo(authInfo)),
        isAuthenticated,
        logout
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
