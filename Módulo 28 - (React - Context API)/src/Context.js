import React, {useState, useContext, createContext}from 'react';


export const ContadorContext = createContext()

export function ContadorProvider(props){
  const [cont, set_cont] = useState(0)

  return(
    <ContadorContext.Provider value={[cont, set_cont]}>
      {props.children}
    </ContadorContext.Provider>
  )
}
