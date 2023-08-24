import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "../Loader";

extend({ OrbitControls });

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-2, 0, 0]}
        angle={10}
        penumbra={5}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 1.3}
        position={isMobile ? [2.5, -1.5, -2] : [0.5, -3.75, -1.7]}
        rotation={[-0.01, -0.3, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 3, 5], fav: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
