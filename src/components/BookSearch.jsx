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
    {searchResults.map(({key, title}) => 
        <p>`${key}:{title}`</p>
    )}
    <Link to="/book"><h2>Book </h2></Link>
    <h2>Book </h2>
    <h2>Book </h2>
    <h2>Book </h2>
    

    </div>
    </>
    )
}