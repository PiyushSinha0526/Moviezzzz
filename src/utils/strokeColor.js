const strokecolor = (ratingValue) => {
  return ratingValue >= 7
    ? "stroke-green-500"
    : ratingValue >= 5 && ratingValue < 7
    ? "stroke-yellow-500"
    : ratingValue < 5
    ? "stroke-red-500"
    : "";
};

export default strokecolor;
