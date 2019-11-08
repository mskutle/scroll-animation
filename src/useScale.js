import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

function useScale() {
  const [windowWidth, windowHeight] = useWindowSize();
  const imageWidth = 1920;
  const imageHeight = 1080;

  const scaleHeight = windowHeight / (imageHeight / 1);
  const scaleWidth = windowWidth / (imageWidth / 1);
  const scale = scaleHeight > scaleWidth ? scaleWidth : scaleHeight;

  return scale;
}

export default useScale;
