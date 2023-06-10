import { Link } from "react-router-dom";
import Book from "./Book";
import BookSearch from "./BookSearch";
import { useEffect, useRef, useState } from "react";

export default function Home(){

    const inputRef = useRef();
    const [searchResults, setSearchResults] = useState({id: 1});



    const handleSearch = async () => {
        const bookTitle = inputRef.current.value;
        const response = await fetch(`https://openlibrary.org/search.json?title=${bookTitle}`)
        const jsonData = await response.json();
        setSearchResults(jsonData);
        
    }
    

    return (
    <>
    <div>

    <input type="text" placeholder="Search book title" ref={inputRef}/>
    <Link to="/booksearch"
        state= {{ searchResults:searchResults
            }}>
        <button onClick={handleSearch}>Search</button>
    </Link>
    
    
    </div>
    </>
    )
}