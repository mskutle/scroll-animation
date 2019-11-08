import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./App.css";
import CanvasWrapper from "./CanvasWrapper";
import useWindowSize from "./useWindowSize";
import Canvas from "./Canvas";
import { getImageObjects } from "./utils";

function App() {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div className="app" style={{ height: window.innerHeight * 1.5 }}>
      <CanvasWrapper>
        <Canvas
          images={getImageObjects()}
          width={windowWidth}
          height={windowHeight}
        />
      </CanvasWrapper>
    </div>
  );
}

export default App;
