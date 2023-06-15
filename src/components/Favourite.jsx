import { useEffect, useState } from "react";

export default function () {
    const [fav, setFav] = useState([]);
    useEffect(() => {
        async function fetchFav() {
            const response = await fetch("https://api.airtable.com/v0/app65aqYxyrOsl98C/User", {
                method: "GET", //
                headers: {
                  "Authorization": "Bearer keyPG1O02n16CwtIw",
                  "Content-Type": "application/json",
                },
              });
            const jsonData = await response.json();
            // console.log("fav", jsonData)
            setFav(jsonData.records);
        }
        fetchFav();
        
    }, []);
    
    console.log(fav)

    return (
    <>
    {fav.map((record, i) => (
        <div key={i}>
          <p>{i+1}. {record.fields.title}</p>
          <p>by: {record.fields.author}</p>
          <img
            src={`https://covers.openlibrary.org/b/id/${record.fields.key}-M.jpg`}
            alt="Book Cover"
            className="book-cover"
          />
          <hr/>
        </div>
        
      ))}
    </>
    )
}