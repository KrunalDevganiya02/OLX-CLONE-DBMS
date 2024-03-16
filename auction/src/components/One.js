import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/placeBid.css";

function One() {
  const [item, setItem] = useState({
    Name: "",
    Description: "",
    Price: null,
    cover: null, // Change cover to null initially
    catagory: "",
    year: "",
    condition: "",
    color: "",
    more: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    if (e.target.name === "cover") {
      // For file input, set the value to the file itself
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleclick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", item.Name);
    formData.append("Description", item.Description);
    formData.append("Price", item.Price);
    formData.append("cover", item.cover);
    formData.append("catagory", item.catagory);
    formData.append("year", item.year);
    formData.append("condition", item.condition);
    formData.append("color", item.color);
    formData.append("more", item.more);

    try {
      await axios.post("http://localhost:8000/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/show");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="up">
      <div className="up-con">
        <h2>List Item</h2>
        <label>
          Enter Brand & Model :
          <input
            type="text"
            placeholder="Enter Product Brand and Model"
            onChange={handlechange}
            name="Name"
          />
        </label>
        <label>
          Enter Description :
          <input
            type="text"
            placeholder=" Enter Description"
            onChange={handlechange}
            name="Description"
          />
        </label>
        <label>
          Enter Price :
          <input
            type="number"
            placeholder="price"
            onChange={handlechange}
            name="Price"
          />
        </label>
        <label>
          Select photo :
          <input type="file" onChange={handlechange} name="cover" />
        </label>

        <label>
          Enter category :
          <input
            type="text"
            placeholder="Catagory"
            onChange={handlechange}
            name="catagory"
          />
        </label>
        <label>
          Enter year of Manufacture :
          <input
            type="text"
            placeholder="Year of Manufacture"
            onChange={handlechange}
            name="year"
          />
        </label>
        <label>
          Enter Product condition :
          <input
            type="text"
            placeholder="Product Condition"
            onChange={handlechange}
            name="condition"
          />
        </label>
        <label>
          Enter colour
          <input
            type="text"
            placeholder=" Product Colour"
            onChange={handlechange}
            name="color"
          />
        </label>
        <label>
          Enter more details about product :
          <textarea
            onChange={handlechange}
            placeholder="More details about product"
            name="more"
          />
        </label>

        <button onClick={handleclick}> Add New Item</button>
      </div>
    </div>
  );
}

// Export the component
export default One;
