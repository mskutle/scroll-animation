import React, { useRef, useState, useEffect, useCallback } from "react";
import { initialize, calculateWhichImageToDrawAndDrawIt } from "./utils";

function Canvas(props) {
  const { width, height, ...rest } = props;
  const ref = useRef();

  const handleScroll = useCallback(
    e => {
      const canvas = ref.current;
      calculateWhichImageToDrawAndDrawIt({ canvas, images: props.images });
    },
    [props.images]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const canvas = ref.current;
    canvas.width = width;
    canvas.height = height;

    initialize({ canvas, images: props.images });
  }, [props.images, width, height]);

  return <canvas ref={ref} {...rest} />;
}

export default Canvas;
