import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import "../Book.css"

export default function Book(){
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const {key, title, author} = location.state;
    console.log('key', key);
    console.log('author', author);
   
    
    useEffect(() => {
        async function fetchBook() {
          const response = await fetch(`https://openlibrary.org${key}.json`);
          const jsonData = await response.json();
          console.log("book", jsonData)
          setBook(jsonData);
        }
        fetchBook();
    }, []);
    
    const favHandler = async () => {

      const data = {
        "records": [
          {
            "fields": {
              "Book name": "book name test3",
              "Author": "author test3"
            }
          }
        ]
      }
      
      const response = await fetch("https://api.airtable.com/v0/app65aqYxyrOsl98C/User", {
      method: "POST", // or 'PUT'
      headers: {
        "Authorization": "Bearer keyPG1O02n16CwtIw",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      await response.json();
    }
    return (
      <div className="book-container">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={favHandler}>Add book to favourites</button>
        <br />
    
        {book.covers && book.covers.length > 0 ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
            alt="Book Cover"
            className="book-cover"
          />
        ) : (
          <img
            src=""
            alt="No Cover Available"
            className="book-cover"
          />
        )}

        <h2 className="book-title">{book.title}</h2>
        {author ? (
          <p className="book-author">by: {author.join(", ")}</p>
        ):(
          <p>No author found</p>
        )}
        

        <h3 className="book-synopsis-header">Synopsis:</h3>
        {book.description && book.description.value ? (
          <p className="book-synopsis">{book.description.value}</p>
        ) : (
          <p className="book-synopsis">No synopsis available</p>
        )}
      </div>
    );
}