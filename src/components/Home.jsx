import { Link } from "react-router-dom";
import Book from "./Book";
import BookSearch from "./BookSearch";
import { useEffect, useRef, useState } from "react";

export default function Home(props){

    const inputRef = useRef();
    
    // useEffect(() => {}, [])
    const handleSearch = async () => {
        const bookTitle = inputRef.current.value;
        const response = await fetch(`https://openlibrary.org/search.json?title=${bookTitle}`)
        const jsonData = await response.json();
        props.setSearchResults(jsonData.docs);
    }
    
    return (
    <>
    <div>

    <input type="text" placeholder="Search book title" ref={inputRef}/>
    <Link to="/booksearch"
        state= {{ searchResults: props.searchResults
            }}>
        <button onClick={handleSearch}>Search</button>
    </Link>
    </div>
    </>
    )
}