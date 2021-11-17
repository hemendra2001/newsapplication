import { useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


const Register = () => {
  
  const [error,setError] = useState(false);
  const [user,setUser] = useState({
      username:'',email:'',password:''
  });
  const history = useHistory();

  const handleUser = (e) =>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  const submitForm = async(e) =>{
   e.preventDefault();
   try{
     const{username,email,password} = user;
     const res = await fetch("/register",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({username,email,password})
     })
     const data =  await res.json();
     if(res.status === 200){
       alert("User registered Successfull");
       history.push("/login");
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
                  <div><h2 className="text-danger my-3">{error}</h2></div>
                <div className="mb-3">
                        <label  className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" onChange={handleUser}/>                           
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={handleUser}/>                           
                    </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={handleUser}/>
                     </div>
                   <button type="submit" className="registerbutton" onClick={submitForm}>Register</button>
                </form>
                        </div>

                        <Footer/>
               </>
                    )
}

                    export default Register
