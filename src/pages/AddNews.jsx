import { useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'


const AddNews = () => {
const[data,setData] = useState({
    title:'',discription:'',file:''
});
const [error,setError] = useState(false);
const history = useHistory();
const ref = React.useRef();


useEffect(()=>{
const user = localStorage.getItem("user")
if(!user){
    history.push("/")
}
},[])


const handleChange = (e) =>{
setData({...data,[e.target.name]:e.target.value})
}

const handleFile = (e) =>{
  setData({...data,file:e.target.files[0]})
}

const handleSubmit = async(e) =>{
    e.preventDefault();

        const formdata = new FormData();
        formdata.append('file',data.file)
        formdata.append('title',data.title)
        formdata.append('discription',data.discription)
    


        try{
            const res = await fetch("/postNews",{
                method:"POST",
                body:formdata
            }) 
            const result = await res.json();
           if(res.status === 200){
               alert(result.Message)
               history.push("/addnews")
               setData({ title:'',discription:''});
               ref.current.value = ""
           }else{
                setError(result.Error)
           }
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
                        <label  className="form-label">Title</label>
                        <input type="title" className="form-control" name="title" value={data.title} onChange={handleChange}/>                           
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Discription</label>
                        <input type="text" className="form-control" name="discription" value={data.discription}  onChange={handleChange}/>                           
                    </div>
                        <div className="mb-3">
                            <label  className="form-label">Image</label>
                            <input type="file" className="form-control" name="file" ref={ref} onChange={handleFile}/>
                     </div>
                   <button type="submit" className="registerbutton" onClick={handleSubmit}>Add News</button>
                </form>
                        </div>
        <Footer/>
        </>
    )
}

export default AddNews
