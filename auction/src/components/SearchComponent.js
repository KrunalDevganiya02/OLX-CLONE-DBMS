// SearchComponent.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/search.css";
import axios from "axios";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const redirectToView = (ID) => {
    // <ViewProduct data={i} />;
    window.location.href = `/view/${ID}`;
  };

  const handleSearch = () => {
    axios
      .get(`http://localhost:8000/search?term=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Product"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <div className="search-container">
        <div className="show-con">
          {Array.isArray(searchResults) &&
            searchResults.map((i) => (
              <div className="item" key={i.ID}>
                <button
                  key={i.ID}
                  onClick={() => {
                    redirectToView(i.ID);
                  }}
                >
                  <div>
                    {i.cover && (
                      <img
                        className="photo"
                        src={`http://localhost:8000/uploads/${i.cover}`}
                        alt=""
                      />
                    )}
                  </div>
                  <h2>{i.Name}</h2>
                  <p>{i.Description}</p>
                  <p> ₹ {i.Price} </p>
                </button>
                <br />
                <div className="show-btn">
                  <Link to={`/buy/${i.ID}`}>
                    <button>Buy</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        {/* ******************** */}
      </div>
    </>
  );
};

export default SearchComponent;
