import { Link, useLocation, useNavigate } from "react-router-dom";
import Book from "./Book";

export default function BookSearch(){

   const location = useLocation();
   const {searchResults} = location.state;
   console.log('results', searchResults);
    
    const navigate = useNavigate();
    return (
    <>
    <div>
    <button onClick={() => navigate(-1)}>Back</button>
    {searchResults.map(({key, title}, i) => 
        <Link to="/book">
            <p id={i}>{i+1}. {title}</p>
        </Link>
        // {/* // <Book id={i} key={key} title={title}/> */}
    )} 
    {/* <Link to="/book" state={{
        }}>
        <Book />
    </Link> */}
    <h2>Book </h2>
    <h2>Book </h2>
    <h2>Book </h2>
    

    </div>
    </>
    )
}