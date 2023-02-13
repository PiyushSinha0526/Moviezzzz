import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Star({ stars }) {
  const starRating = Array.from({ length: 5 }, (e, idx) => {
    let count = idx + 0.5;
    return (
      <span key={idx}>
        {stars >= idx + 1 ? (
          <BsStarFill />
        ) : stars >= count ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return <>{starRating}</>;
}

export default Star;
