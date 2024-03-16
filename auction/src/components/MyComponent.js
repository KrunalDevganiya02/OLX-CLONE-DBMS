import React from "react";
import CategoryCard from "./CategoryCard";
import c1 from "../img/car.jpg";
import m1 from "../img/mobile.jpg";
import l1 from "../img/laptop.jpg";
import b1 from "../img/bike.jpg";
import wm1 from "../img/washing.jpg";
import s1 from "../img/sport.jpg";
import camera from "../img/camera.jpg";
import book from "../img/books.jpg";
import f1 from "../img/fashin.jpg";
import fur from "../img/furniture.jpg";
import "../style/card.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carosel";
import FrontPage from "./Frontpage";
import Footer from "../components/Footer";
import SearchComponent from "./SearchComponent";

const MyComponent = () => {
  const navigate = useNavigate();

  const handleViewMore = (i) => {
    // Handle view more action
    console.log(i);
    navigate("/showBuy", { state: { value: i } });
  };

  return (
    <>
      <div className="search">
        <SearchComponent />
      </div>
      <div className="frontpage">
        <FrontPage />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <div className="card-con">
        <CategoryCard
          className="card"
          name="Car"
          image={c1}
          description="All types of cars avilabe here"
          onClick={() => {
            handleViewMore("car");
          }}
        />

        <CategoryCard
          className="card"
          name="Laptop"
          image={l1}
          description="All types of Laptops avilabe here"
          onClick={() => {
            handleViewMore("laptop");
          }}
        />
        <CategoryCard
          className="card"
          name="Bike"
          image={b1}
          description="All types of Bikes avilabe here"
          onClick={() => {
            handleViewMore("bike");
          }}
        />
        <CategoryCard
          className="card"
          name="Washing Machine"
          image={wm1}
          description="All types of Washing Machine avilabe here"
          onClick={() => {
            handleViewMore("washing");
          }}
        />
        <CategoryCard
          className="card"
          name="Sport"
          image={s1}
          description="All types of Sport items avilabe here"
          onClick={() => {
            handleViewMore("sport");
          }}
        />
        <CategoryCard
          className="card"
          name="Mobile"
          image={m1}
          description="All types of Mobile avilabe here"
          onClick={() => {
            handleViewMore("mobile");
          }}
        />
        <CategoryCard
          className="card"
          name="Book"
          image={book}
          description="All types of Book avilabe here"
          onClick={() => {
            handleViewMore("book");
          }}
        />
        <CategoryCard
          className="card"
          name="Furniture"
          image={fur}
          description="All types of Furniture avilabe here"
          onClick={() => {
            handleViewMore("furniture");
          }}
        />
        <CategoryCard
          className="card"
          name="Fashion"
          image={f1}
          description="All types of Cloth avilabe here"
          onClick={() => {
            handleViewMore("fashion");
          }}
        />
        <CategoryCard
          className="card"
          name="Camera"
          image={camera}
          description="All types of cameras avilabe here"
          onClick={() => {
            handleViewMore("camera");
          }}
        />
      </div>
    </>
  );
};

export default MyComponent;
