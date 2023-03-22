import { MeshReflectorMaterial } from "@react-three/drei";
import * as DREI from "@react-three/drei";

export default function Experience() {
  return (
    <>
      {/* Background color */}
      <color args={["#0F0F0F"]} attach="background" />

      <mesh rotation-x={-Math.PI * 0.5} scale={40} position={[-3, 0, -3]}>
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={0.9}
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          envMapIntensity={0.2}
        />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <boxBufferGeometry />
        <meshBasicMaterial />
      </mesh>

      <DREI.OrbitControls
        makeDefault
        target={[0, 1, 0]}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.9}
        maxAzimuthAngle={Math.PI / 1.65}
        minAzimuthAngle={Math.PI * 1.9}
        rotateSpeed={0.5}
        enablePan={false}
        dampingFactor={0.03}
        zoomSpeed={1}
        enabled={true}
      />
    </>
  );
}
