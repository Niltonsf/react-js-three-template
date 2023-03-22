import "./App.css";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience";

const onCreated = (state: any) => {
  state.gl.domElement.style.position = "absolute";
  state.gl.domElement.style.zIndex = 10;
};

function App() {
  return (
    <>
      <Leva hidden={true} />
      <Canvas
        eventSource={document.getElementById("root") as any}
        camera={{
          fov: 55,
          near: 0.1,
          far: 2000,
          position: [4, 3.5, 6],
        }}
        onCreated={onCreated as any}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
