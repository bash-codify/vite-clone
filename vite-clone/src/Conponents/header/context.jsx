import React, {useState, useContext} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [resource, setResource] = useState(false);
  const [version, setVersion] = useState(false);
  const [langa, setLanga] = useState(false);
  const [largemenuicon, setLargeMenuIcon] = useState(false);



    return (
    
    <AppContext.Provider value={{resource, setResource, version, setVersion, langa, setLanga, largemenuicon, setLargeMenuIcon}}>

    {children}

    </AppContext.Provider>

    )
};

export const useGlobalHeader = () =>{

    return useContext (AppContext)
};

export {AppProvider}