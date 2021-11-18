import React from "react"
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from "./pages/About";
import AddNews from "./pages/AddNews";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Single from './pages/Single';



const App = () =>{
return(
<>
<BrowserRouter>
<Switch>
<Route exact path="/" component={Home}></Route>

<Route exact path="/single/:id" component={Single}></Route>

<Route exact path="/about" component={About}></Route>

<Route exact path="/login" component={Login}></Route>

<Route exact path="/register" component={Register}></Route>

<Route exact path="/addnews" component={AddNews}></Route>

<Route exact path="/logout" component={Logout}></Route>

<Route component={ErrorPage}></Route>
</Switch>
</BrowserRouter>
</>

)
}

export default App