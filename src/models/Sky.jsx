import { useGLTF } from "@react-three/drei";
import skYScene from "../assets/3d/sky.glb";

const Sky = () => {
  const sky = useGLTF(skYScene);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
