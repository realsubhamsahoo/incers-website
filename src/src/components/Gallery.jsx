import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import image10 from "../images/image10.jpg"
import image11 from "../images/image11.jpg"
import image12 from "../images/image12.jpg"
import image13 from "../images/image13.jpg"
import image14 from "../images/image14.jpg"
import image15 from "../images/image15.jpg"
import image16 from "../images/image16.jpg"
// import React from "react";

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Gallery 2024
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-75 h-48 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;