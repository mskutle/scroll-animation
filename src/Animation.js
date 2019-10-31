import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import { initialize } from "./utils";

const scrollCoefficient = 3;

function Animation() {
  const [windowWidth, windowHeight] = useWindowSize();
  const canvasRef = useRef();

  const handleScroll = e => {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    const scrollPercentage =
      (scrollTop * scrollCoefficient) / windowHeight / 1.5;
    // scrubThroughFrames(canvasRef.current, scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    initialize(canvasRef.current);
  }, [windowWidth, windowHeight]);

  return <canvas ref={canvasRef} />;
}

export default Animation;
