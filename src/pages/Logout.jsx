import { useHistory } from 'react-router';



const Logout = () => {
    const history = useHistory();
    localStorage.removeItem("user")
    history.push("/")

    return (
        <>
            
        </>
    )
}

export default Logout
