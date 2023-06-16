import { useEffect, useState } from "react";
// import "../Favourites.css";

export default function Favourite() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    async function fetchFav() {
      const response = await fetch("https://api.airtable.com/v0/app65aqYxyrOsl98C/User", {
        method: "GET",
        headers: {
          "Authorization": "Bearer keyPG1O02n16CwtIw",
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      setFav(jsonData.records);
    }
    fetchFav();
  }, []);

  return (
    <div className="favourites-container">
      {fav.map((record, i) => (
        <div key={i} className="favourites-item">
          <h4>{i + 1}. {record.fields.title}</h4>
          <p>by: {record.fields.author}</p>
          <img
            src={`https://covers.openlibrary.org/b/id/${record.fields.key}-M.jpg`}
            alt="Book Cover"
          />
          <hr/>
        </div>
      ))}
    </div>
  );
}