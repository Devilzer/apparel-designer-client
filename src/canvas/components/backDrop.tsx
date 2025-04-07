import { useRef } from 'react';
import {easing} from 'maath';
import {useFrame} from '@react-three/fiber';
import {AccumulativeShadows, RandomizedLight} from '@react-three/drei';


const BackDrop = () => {
  // const first = useRef(second)
  return (
    <AccumulativeShadows
    position={[0,0,-0.14]}
    >
      <RandomizedLight
      amount={4}
      />
    </AccumulativeShadows>
  )
}

export default BackDrop