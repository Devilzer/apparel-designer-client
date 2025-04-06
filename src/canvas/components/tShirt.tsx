import {easing} from 'maath';
import {useSnapshot} from 'valtio'
import {useFrame} from '@react-three/fiber'
import {Decal, useGLTF, useTexture} from '@react-three/drei'

import state from '../../store'
const Tshirt = () => {
  const snap = useSnapshot(state);
  const {nodes, materials} = useGLTF('/tShirt.glb')
  console.log('NODES',nodes)
  console.log('MATERIALS',materials)

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  console.log('FULL',fullTexture)

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
              material-transparent={false}
              dispose={null}
            >
              {snap.isFullTexture && (
                <Decal
                debug
                position={[0,1.25,0]}
                rotation={[0,0,0]}
                scale={1}
                map={fullTexture}
                />
              )}

              {snap.isLogoTexture && (
                <Decal
                debug
                position={[0,1.35,0.075]}
                rotation={[0,0,0]}
                scale={0.25}
                map={logoTexture}  
                />
              )}
            </mesh>
          );
        }
        return null;
      })} 
    </group>
  )
}

export default Tshirt