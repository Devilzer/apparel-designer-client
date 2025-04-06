import {Canvas} from '@react-three/fiber';
import {Environment, Center} from '@react-three/drei';

import Tshirt from "../components/tShirt";
import BackDrop from '../components/backDrop'
import CameraRig from '../components/cameraRig'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      <CameraRig>
        {/* <BackDrop/> */}
        <Center>
          <Tshirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel