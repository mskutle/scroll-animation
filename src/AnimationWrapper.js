import React, { useRef, useEffect } from "react";
import useWindowSize from "./useWindowWidth";

const imageWidth = 1920;
const imageHeight = 1080;

function AnimationWrapper({ children }) {
  const [windowWidth, windowHeight] = useWindowSize();
  const animationContainerRef = useRef();
  /*
  useEffect(() => {
    const scaleHeight = windowHeight / imageHeight;
    const scaleWidth = windowWidth / imageWidth;
    const scale = scaleHeight > scaleWidth ? scaleWidth : scaleHeight;
    animationContainerRef.current.style.transform = `translate3d(0, -10%, 0) scale(${scale})`;
  }, [windowHeight, windowWidth]); */

  return (
    <div className="sticky-container">
      <div className="animation-container" ref={animationContainerRef}>
        {children}
      </div>
    </div>
  );
}

export default AnimationWrapper;
