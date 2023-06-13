import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function Book(){
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const {key, title, author} = location.state;
    console.log('key', key);
    console.log('key', author);
    
    useEffect(() => {
        async function fetchBook() {
          const response = await fetch(`https://openlibrary.org${key}.json`);
          const jsonData = await response.json();
          console.log("book", jsonData)
          setBook(jsonData);
        }
        fetchBook();
    }, []);
    
    return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
    <p>{book.title} by {author}</p>
    {/* {book.covers.length > 0 &&
    <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}></img>
    } */}

    {book.covers && book.covers.length > 0 ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
          alt="Book Cover"
          style={{ border: "1px solid black" }}
        />
      ) : (
        <img
        src=""
        alt="No Cover Available"
        style={{ border: "1px solid black" }}
  />
      )}
    
    </>
    )
}