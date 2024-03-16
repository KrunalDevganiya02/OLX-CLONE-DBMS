// // Home.js
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const Home = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <button onClick={prevImage}>Previous</button>
//       <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// export default Home;

// const images = [
//   // Add more image URLs as needed
// ];

// ReactDOM.render(<Home images={images} />, document.getElementById("root"));
