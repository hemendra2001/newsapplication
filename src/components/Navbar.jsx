import {Link} from 'react-router-dom';



const Navbar = () => {
const user = localStorage.getItem("user")
if(user){
  var username = JSON.parse(user)
  username = username.User
}

    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark navEdit">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="/">DAILY NEWS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">


{
  user ?
  <>
<li className="nav-item ">
          <Link className="nav-link active nav_list" aria-current="page" to="/">{username}</Link>
        </li>
<li className="nav-item ">
          <Link className="nav-link active nav_list" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active nav_list" aria-current="page" to="/about">About Us</Link>
        </li>
<li className="nav-item">
          <Link className="nav-link active nav_list" aria-current="page" to="/addnews">Add News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active nav_list" aria-current="page" to="/logout">Logout</Link>
        </li>


  </>
  :
  <>
<li className="nav-item ">
          <Link className="nav-link active nav_list" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active nav_list" aria-current="page" to="/about">About Us</Link>
        </li>
<li className="nav-item">
          <Link className="nav-link active nav_list" aria-current="page" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active nav_list" aria-current="page" to="/login">Login</Link>
  </li>



  </>
}






      </ul>
    </div>
  </div>
</nav>


        </>
    )
}

export default Navbar
