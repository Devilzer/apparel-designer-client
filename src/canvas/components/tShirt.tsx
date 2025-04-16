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
  
  useFrame((state, delta) => {
    easing.dampC(materials.Body_FRONT_2664.color,snap.color,0.25,delta)
    easing.dampC(materials.Sleeves_FRONT_2669.color,snap.color,0.25,delta)
  })

  const stateString = JSON.stringify(snap);

  return (
    <group
    key={stateString}>
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
              castShadow
              receiveShadow
            >
              {snap.isFullTexture && (
                <Decal
                position={[0,1.25,0]}
                rotation={[0,0,0]}
                scale={1}
                map={fullTexture}
                />
              )}

              {snap.isLogoTexture && (
                <Decal
                position={[0,1.35,0.075]}
                rotation={[0,0,0]}
                scale={0.25}
                map={logoTexture}  
                depthTest={false}
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