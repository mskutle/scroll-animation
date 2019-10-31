import React, { useRef, useState, useEffect } from "react";
import {
  initialize,
  getImageObjects,
  calculateWhichImageToDrawAndDrawIt
} from "./utils";
import useWindowSize from "./useWindowSize";

function Canvas() {
  const [windowWidth, windowHeight] = useWindowSize();
  const [images] = useState(getImageObjects());
  const ref = useRef();

  const handleScroll = e => {
    const canvas = ref.current;
    calculateWhichImageToDrawAndDrawIt(canvas, images);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    initialize(ref.current, images);
  }, [images]);

  return <canvas ref={ref} height={windowHeight} width={windowWidth} />;
}

export default Canvas;
