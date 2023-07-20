import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Review = ({ rating }) => {
  // Redondeamos el valor del rating al número entero más cercano
  const roundedRating = Math.round(rating);

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          {index < roundedRating ? (
            <i className="fas fa-star"></i>
          ) : index === roundedRating - 1 ? (
            <i className="fas fa-star-half-alt"></i>
          ) : (
            <i className="far fa-star"></i>
          )}
        </span>
      ))}
    </div>
  );
};

export default Review;
