import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function Book(){
    // const [book, setBook] = useState({});
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

    return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
    Book description
    </>
    )
}