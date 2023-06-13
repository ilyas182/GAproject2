import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function Author(){
    const [author, setAuthor] = useState({});
    const [authorWorks, setAuthorWorks] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const {name, author_key} = location.state;
    console.log("name", name);
    console.log("key", author_key)

    useEffect(() => {
        async function fetchAuthor() {
          const response = await fetch(`https://openlibrary.org/authors/${author_key[0]}.json`);
          const jsonData = await response.json();
          console.log("book", jsonData)
          setAuthor(jsonData);

          const response2 = await fetch(`https://openlibrary.org/authors/${author_key[0]}/works.json`);
          const jsonData2 = await response2.json();
          setAuthorWorks(jsonData2);
        }
        fetchAuthor();
        
    }, []);
    console.log('author works', authorWorks);
    console.log('author', author)
    
    return (
        <>
        <button onClick={() => navigate(-1)}>Back</button>
        {/* <p>{name}</p> */}
        <h2>{author.name}</h2>
        <p>Birth date: {author.birth_date}</p>
        <p>{author.bio}</p>

        <h2>Works</h2>
        {authorWorks.entries && authorWorks.entries.length > 0 ? (
        authorWorks.entries.map(({ title }, i) => 
        <p key={i}>{i+1}.{title}</p>        
        )
        ) : (
            <p> No works available</p>
        )}
        </>
    )
    
}