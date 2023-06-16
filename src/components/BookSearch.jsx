import { Link, useLocation, useNavigate } from "react-router-dom";
import Book from "./Book";
import "../BookSearch.css"

export default function BookSearch(props){

   const location = useLocation();
//    const { books } = location.state;
//    const { searchResults } = location.state;
//    console.log('results1', searchResults);
   console.log('results2', props.searchResults);
    
    
    const navigate = useNavigate();
    return (
      <div className="book-search-container">
      <button onClick={() => navigate(-1)}>Back</button>
      
      {props.searchResults > 0 ? (

      props.searchResults.map(({ key, title, author_name, author_key }, i) => (
        <div key={i} className="book-search-item">
          <Link to="/book" state={{ key, title, author: author_name }}>
            <p id={i}>{i + 1}. {title}</p>
          </Link>
  
          <p>Written by:</p>
          <div className="author-names">
    {author_name && author_name.length > 0 ? (
      author_name.map((name, i) => (
        <Link
          key={i}
          to="/author"
          state={{ name: author_name[i], author_key: author_key[i] }}
          className="author-link"
        >
          <p>{name}</p>
        </Link>
      ))
    ) : (
      <p>No authors found</p>
    )}
  </div>
          <hr />
        </div>
      ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}