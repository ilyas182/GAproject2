import { Link, useLocation, useNavigate } from "react-router-dom";
import Book from "./Book";

export default function BookSearch(props){

   const location = useLocation();
//    const { books } = location.state;
//    const { searchResults } = location.state;
//    console.log('results1', searchResults);
   console.log('results2', props.searchResults);
    
    
    const navigate = useNavigate();
    return (
    <>
    <div>
    <button onClick={() => navigate(-1)}>Back</button>
    {props.searchResults.map(({key, title}, i) => 
        <Link to="/book"
        state = {{key: key}}>
            <p id={i}>{i+1}. {title}</p>
        </Link>
    )} 
    

    </div>
    </>
    )
}