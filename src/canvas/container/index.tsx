import {Canvas} from '@react-three/fiber';
import {Environment, Center} from '@react-three/drei';

import Tshirt from "../components/tShirt";
import BackDrop from '../components/backDrop'
import CameraRig from '../components/cameraRig'

const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={
      {
        position:[0,0,0],
        fov:45
      }
    }
    gl={{preserveDrawingBuffer:true}}
    className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      <CameraRig>
        <BackDrop/>
        <Center>
          <Tshirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel