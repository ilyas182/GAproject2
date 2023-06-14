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
    {props.searchResults.map(({ key, title, author_name, author_key }, i) => 
    <div key={i}>
    
    <Link to="/book" state={{ key, title, author: author_name }}>
      <p id={i}>{i + 1}. {title}</p>
    </Link>
    
    <p>Written by: </p> 
    
    {author_name.map((name) => 
        <Link to="/author" state={{name: author_name, author_key: author_key}}>
        <p style={{ display: "inline-block", marginRight: "10px" }}>{name} |</p>
      </Link>
    )}
    <hr/>
    </div>
)}
    </div>
    </>
    )
}