<<<<<<< HEAD

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
=======
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
>>>>>>> a80a70405789da037bd118dbd04e8bea79933456
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: "smooth" 
=======
      left: 0,
      behavior: "auto",
>>>>>>> a80a70405789da037bd118dbd04e8bea79933456
    });
  }, [pathname]);

  return null;
<<<<<<< HEAD
}
=======
};

export default ScrollToTop;
>>>>>>> a80a70405789da037bd118dbd04e8bea79933456
