import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Body = () => {
    const [news, setNews] = useState([]);
    const[pageNumber,setPageNumber] = useState(0)
    const[search,setSearch] = useState('');
    useEffect(() => {
        axios.get("http://localhost:5000/getNews")
        .then(res => res.data)
        .then(res => setNews(res))
    }, [])


    const cutTitle = (text) => {
        return text.length > 20 ? text.substr(0, 20) : text;
    }
    const cutDis = (text) => {
        return text.length > 50 ? text.substr(0, 50) : text;
    }
    const image = (text) => {
        return text.replace("public","");
    }

    const userPerPage = 9
    const pageVisited = pageNumber * userPerPage
    const pageCount = Math.ceil(news.length/userPerPage);
    const changePage = ({selected}) =>{
    setPageNumber(selected)
    }

    const displayUser = news.slice(pageVisited,pageVisited + userPerPage).filter(({title,discription}) => title.indexOf(search) > -1 || discription.indexOf(search) > -1 ).map(news => {
     return (
            <div className="col-md-4 mx-auto styleCard" key={news._id}>
                <div className="card"  style={{ width: "18rem" }}>
                    <img   
                     src={"http://localhost:5000/" + image(news.file)}                                                 
                     width="100" height="300px" className="card-img-top" alt="newsImage" />                           
                    <div className="card-body">
                        <h5 className="card-title">{cutTitle(news.title)}</h5>
                        <p className="card-text">{cutDis(news.discription)}</p>
                        <Link style={{textDecoration:'none'}} to={`single/${news._id}`}><p className="buttonEdit">Detail News</p></Link>
                    </div>
                </div>
            </div>
        )
    })

    return (  
                <>
                    <div className="container">
                        <div>
                            <h2 className="heading">DAILY NEWSPAPER</h2>
                        </div>
                        <div className="intro">
                            <p>it is platform where you get all the latest and popular news.<br /> Here you will get all the update news fast and accurate</p>
                        </div>
                        <div className="searchdiv">
                            <input type="search" className="searchbar" placeholder="Search News" name="search" autoComplete="off" onChange={(e)=> setSearch(e.target.value)}/>
                        </div>
                        <hr />
                        <div>
                            <div className="row ">
                                {         
                                  displayUser
                                }
                            </div>   
                        </div>
                        <div className="container">
                        <ReactPaginate
                        previousLabel = {"Previous"}
                        nextLabel = {"Next"}
                        pageCount = {pageCount}
                        onPageChange = {changePage}
                        containerClassName = {"paginationBtn"}
                        previousLinkClassName = {"previousBtn"}
                        nextLinkClassName = {"nextBtn"}
                        disabledClassName = {"paginationDisabled"}
                        activeClassName = {"paginationActive"}
                        />
                        </div> 
                    </div>
        </>
    )
}

export default Body


