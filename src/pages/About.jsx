import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
          <Navbar/>  

         <div className="container">
             <div className="aboutdiv">
                 <h1 className="create">Creator</h1>
                 <p className="name">Hemendra Singh Rao</p>
                 <h2 className="about">I AM A MERN STACK DEVELOPER MY AIM IS TO CREATE SOME FANTASTIC PROJECTS.</h2>
             </div>
         </div>


          <Footer/>
        </>
    )
}

export default About
