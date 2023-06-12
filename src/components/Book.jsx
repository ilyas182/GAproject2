import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function Book(){
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const {key} = location.state;
    console.log(key);
    
    useEffect(() => {
        async function fetchBook() {
          const response = await fetch(`https://openlibrary.org${key}.json`);
          const jsonData = await response.json();
          console.log("book", jsonData)
          setBook(jsonData);
        }
        fetchBook();
    }, []);
    let x;
    console.log(x)
    console.log('book',book);
    return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
    <p>{book.title}</p>
    {/* {book.covers}
    <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}></img> */}

    {book.covers && book.covers.length > 0 ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
          alt="Book Cover"
        />
      ) : (
        <p>No cover available</p>
      )}
    
    </>
    )
}