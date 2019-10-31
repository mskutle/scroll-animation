import React from "react";
import "./App.css";
import Animation from "./Animation";
import AnimationWrapper from "./AnimationWrapper";
import useWindowSize from "./useWindowSize";
import Canvas from "./Canvas";

function App() {
  const [_, windowHeight] = useWindowSize();
  return (
    <div className="App" style={{ height: windowHeight * 1.5 }}>
      <AnimationWrapper>
        <Canvas />
      </AnimationWrapper>
    </div>
  );
}

export default App;
