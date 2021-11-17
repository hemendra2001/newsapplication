import { useState} from 'react';
import { useHistory } from 'react-router';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { useContext } from 'react';
import { LoginContext } from '../context/AuthContext';



const Login = () => {
    const [error,setError] = useState(false);
    const [user,setUser] = useState({
    email:'',password:''
    });
    const history = useHistory();
    const{username,setUsername} = useContext(LoginContext)
  
    const handleUser = (e) =>{
      setUser({...user,[e.target.name]:e.target.value});
    }
  
    const submitForm = async(e) =>{
     e.preventDefault();
     try{
       const{email,password} = user;
       const res = await fetch("/login",{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({email,password})
       })
       const data =  await res.json();
       if(res.status === 200){
         const info = data.User
         setUsername(info)
         alert("User Login Successfull");
         history.push("/");
       }
       setError(data.Message);
     }
     catch(err){
       console.log(err);  
     }
    }



    return (
        <>
        
        <Navbar/>
            <div className="registerdiv container">
                <form className="formedit">
                <div><h2 className="text-danger my-5">{error}</h2></div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={handleUser}/>                           
                    </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={handleUser}/>
                     </div>
                   <button type="submit" className="registerbutton" onClick={submitForm}>Login</button>
                </form>
                        </div>

                        <Footer/>
        </>
    )
}

export default Login
