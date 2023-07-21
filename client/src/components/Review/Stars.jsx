import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Stars = ({ rating, editable, onRatingChange }) => {
  const handleStarClick = (newRating) => {
    if (editable && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} onClick={() => handleStarClick(index + 1)}>
          {index + 1 <= rating ? (
            <i className="fas fa-star" style={{ color: 'rgba(227, 209, 43, 0.94)' }}></i>
          ) : index < rating ? (
            <i className="fas fa-star-half-alt" style={{ color: 'rgba(227, 209, 43, 0.94)' }}></i>
          ) : (
            <i className="far fa-star"></i>
          )}
        </span>
      ))}
    </div>
  );
};

export default Stars;
