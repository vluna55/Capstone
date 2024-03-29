import React, { createContext, useState } from 'react'

const UserContext =  createContext({});
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    return (
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        {children}
      </UserContext.Provider>
    );
  };

export default UserContext