import {easing} from 'maath';
import {useSnapshot} from 'valtio'
import {useFrame} from '@react-three/fiber'
import {Decal, useGLTF, useTexture} from '@react-three/drei'

import state from '../../store'
const Tshirt = () => {
  const snap = useSnapshot(state);
  const {nodes, materials} = useGLTF('/shirt_baked.glb')
  console.log("nodes",nodes,"materials",materials)

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  return (
    <group>
      {/* <mesh
      castShadow
      material={}
      geometry={}
      material-roughness={1}
      dispose={null}>

      </mesh> */}
    </group>
  )
}

export default Tshirt