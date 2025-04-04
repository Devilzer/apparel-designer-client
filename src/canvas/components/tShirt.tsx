import {easing} from 'maath';
import {useSnapshot} from 'valtio'
import {useFrame} from '@react-three/fiber'
import {Decal, useGLTF, useTexture} from '@react-three/drei'

import state from '../../store'
const Tshirt = () => {
  const snap = useSnapshot(state);
  const {nodes, materials} = useGLTF('/tShirt.glb')

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  return (
    <group>
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (node.isMesh) {
          return (
            <mesh
              key={key}
              geometry={node.geometry}
              material={materials[node.material.name]}
              material-roughness={0.5}
              dispose={null}
            >
            </mesh>
          );
        }
        return null;
      })}
    </group>
  )
}

export default Tshirt