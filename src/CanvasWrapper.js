import React, { useRef, useEffect } from "react";
import useScale from "./useScale";

function CanvasWrapper({ children }) {
  const ref = useRef();
  const scale = useScale();

  /* useEffect(() => {
    const wrapper = ref.current;
    wrapper.style.transform = `scale(${scale})`;
  }, [scale]); */

  return (
    <div ref={ref} className="canvas-wrapper">
      {children}
    </div>
  );
}

export default CanvasWrapper;
