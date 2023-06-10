import { Link, useLocation, useNavigate } from "react-router-dom";
import Book from "./Book";

export default function BookSearch(){

   const location = useLocation();
   const {from} = location.state;
   console.log('results', location.state);
    
    const navigate = useNavigate();
    return (
    <>
    <div>
    <button onClick={() => navigate(-1)}>Back</button>
    <Link to="/book"><h2>Book </h2></Link>
    <h2>Book </h2>
    <h2>Book </h2>
    <h2>Book </h2>
    

    </div>
    </>
    )
}