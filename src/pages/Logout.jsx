import { useHistory } from 'react-router';
import { useContext } from 'react';
import { LoginContext } from '../context/AuthContext';


const Logout = () => {
    const history = useHistory();
    const{username,setUsername} = useContext(LoginContext)


    const logoutUser = async() =>{
    try{
        const res = await fetch("/logout",{
            method:"GET"
        })
        await res.json();
        setUsername('')
        history.push("/");

    }
    catch(err){
        console.log(err)
    }
    }

        logoutUser();

    return (
        <>
            
        </>
    )
}

export default Logout
