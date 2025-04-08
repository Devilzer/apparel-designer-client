import { useRef } from 'react';
import {useFrame} from '@react-three/fiber';
import {AccumulativeShadows, RandomizedLight} from '@react-three/drei';


const BackDrop = () => {
  const shadows = useRef();
  return (
  <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.50}
    scale={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}
    color="#ffffff"
>
  <RandomizedLight
    castShadow 
    amount={4}
    radius={9}
    intensity={0.7}
    ambient={0.15}
    position={[5, 5, -10]}
  />
  <RandomizedLight
    castShadow 
    amount={4}
    radius={5}
    intensity={0.25}
    ambient={0.45}
    position={[-5, 5, -9]}
  />
</AccumulativeShadows>
  )
}

export default BackDrop