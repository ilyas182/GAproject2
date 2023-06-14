import { Link, useNavigate } from "react-router-dom";
import Book from "./Book";
import BookSearch from "./BookSearch";
import { useEffect, useRef, useState } from "react";
import '../Home.css';

export default function Home(props){

    const inputRef = useRef();
    const [books, setBooks] = useState({});
    const navigate = useNavigate();
    
    const handleSearch = async () => {

        const bookTitle = inputRef.current.value;
        const response = await fetch(`https://openlibrary.org/search.json?title=${bookTitle}`);
        const jsonData = await response.json();
        props.setSearchResults(jsonData.docs); 
        navigate('/booksearch')
           
    }
    
    return (
    <>
    <div className="home-container">
    <img
    src="https://www.history.ac.uk/sites/default/files/styles/small/public/2019-07/mc_ihr_119_1.JPG?h=9eb0d413&itok=K9ma34SU"
    className="home-image"
    alt="Library"
    />
    <input
    type="text"
    placeholder="Search book title"
    className="home-input"
    ref={inputRef}
    />
    <button className="home-button" onClick={handleSearch}>
    Search
    </button>
    </div>
    </>
    )
}