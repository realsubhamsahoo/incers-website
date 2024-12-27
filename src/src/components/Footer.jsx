// import React from "react";

const Footer= () => {
  return (
    <div className="bg-gray-800 text-white py-6 flex flex-col items-center">
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      <div className="border border-gray-400 px-4 py-2 rounded mb-4">
        <a
          href="#"
          className="flex items-center space-x-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span role="img" aria-label="location">
            -1
          </span>
          <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
        </a>
      </div>

      <div className="border border-gray-400 px-4 py-2 rounded mb-4">
        <a
          href="#"
          className="flex items-center space-x-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span role="img" aria-label="email">
            0
          </span>
          <span>incersnitr@gmail.com</span>
        </a>
      </div>

      <div className="flex space-x-4">
        <a
          href="#"
          className="p-2 rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span role="img" aria-label="facebook">
            1
          </span>
        </a>
        <a
          href="#"
          className="p-2 rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span role="img" aria-label="twitter">
            2
          </span>
        </a>
        <a
          href="#"
          className="p-2 rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span role="img" aria-label="instagram">
            3
          </span>
        </a>
        <a
          href="#"
          className="p-2 rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span role="img" aria-label="linkedin">
            
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
