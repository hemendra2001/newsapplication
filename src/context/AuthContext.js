import {useState,createContext} from 'react'




export const LoginContext = createContext('')

const AuthContext = ({children}) => {
    const[username,setUsername] = useState('');
    return (
        <>
       <LoginContext.Provider value={{username,setUsername}}>
           {children}
            </LoginContext.Provider>
        </>
    )
}

export default AuthContext
