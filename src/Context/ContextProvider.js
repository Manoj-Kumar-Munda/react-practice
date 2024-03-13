import React, { createContext, useState } from 'react'

export const CounterContext = createContext(0);

export const ContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{count,name :"hello"}}>
        {children}
    </CounterContext.Provider>
  )
}

export default ContextProvider