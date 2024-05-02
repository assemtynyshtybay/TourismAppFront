import React from "react";
import "./Tours.css";

const Tours = () => {
  return (
    <div className="tours">
      <div className="Card">
        <div className="image">
          <img src="/src/assets/images/tour1.png" alt="tour1" />
        </div>
        <div className="details">
          <div className="country">Thailand</div>
          <div className="dates">17 sep - 23 sep</div>
        </div>
        <div className="features">
          <li>Luxurious Accommodation</li>
          <li>Private beach</li>
          <li>5 meals a day</li>
          <li>Sightseeing</li>
        </div>
        <div className="booking">
          <div className="price">500$</div>
          <div className="Book_button">
            <button>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
