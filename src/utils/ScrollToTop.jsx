import React, { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      {showTopBtn && (
        <MdArrowUpward className="fixed bottom-10 right-6 z-20 bg bg-white border to-blue-400 rounded-full h-10 w-10 cursor-pointer animate-bounce" onClick={goToTop}/>
      )}
    </div>
  );
}

export default ScrollToTop;
