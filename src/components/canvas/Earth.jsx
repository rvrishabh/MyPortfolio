import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader";

extend({ OrbitControls });

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.5} />;
};

const EarthCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [-4, 0, 0], fov: 75 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
