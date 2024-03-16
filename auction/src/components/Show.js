import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/show.css";

function Show() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/items");
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handledelete = async (ID) => {
    try {
      await axios.delete("http://localhost:8000/items/" + ID);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <>
      <div className="show">
        <h1>All Items</h1>
        <div className="show-con">
          {item.map((i) => (
            <div className="item" key={i.ID}>
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
              <br />
              <div className="show-btn">
                <button
                  onClick={() => {
                    handledelete(i.ID);
                  }}
                >
                  Delete
                </button>
                <Link to={`/place/${i.ID}`}>
                  <button>Update</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="add-btn">
        <Link to="/one">
          <button>Add new Item</button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Show;
