import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect ,useState} from 'react'



const Single = ({match}) => {

const [post,NewPost] = useState('');

useEffect(()=>{
callData();
},[])

const callData = async() =>{
try{
    const res = await fetch(`/getNewssingle/${match.params.id}`,{
        method:"GET",
    })
    const result = await res.json();
    NewPost(result);
}
catch(err){
    console.log(err);
}
}


const getImage = (text) => {
    if(text){
        return text.replace("public","");
    }
  else{
      console.log("")
  }
}






    return (
        <>
         <Navbar/> 
           <div className="container">
      
              <div className="mt-5">
                  <img
                    src={"http://localhost:5000/" + getImage(post.file)} 
                  
                  width="100%" alt="singleImage" />
                </div> 
                <div className="mt-3">
                  <h2>Title : {post.title}</h2>
                </div>
                <div className="my-5">
                  <p><span style={{fontWeight:'bold'}}>Discription :</span> {post.discription}</p>  
                </div>
               </div> 
               <Footer/>
        </>
    )
}

export default Single
