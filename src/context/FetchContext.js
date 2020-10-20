import React, { createContext, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authContext = useContext(AuthContext);
  const {authState} = authContext
  const config = {
    headers: {'auth-token': authState.data.token}
  }

  const authAxios = axios.create({
    baseURL: 'https://checkme-backend.herokuapp.com'
  });

  return (
    <Provider
      value={{
        authAxios,
        config
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
