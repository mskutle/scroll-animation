import { useState, useEffect } from "react";

function useWindowSize(delayMs = 0) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    const timeout = setTimeout(() => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
      return () => clearTimeout(timeout);
    }, delayMs);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [windowWidth, windowHeight];
}

export default useWindowSize;
