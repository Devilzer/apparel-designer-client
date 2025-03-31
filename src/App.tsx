import Canvas from './canvas/index'
import Customizer from './features/customizer/container'
import Home from './features/home/container'

function App() {
  return (
    <div className="app transition-all ease-in">
      <Home />
      <Canvas />  
      <Customizer />
    </div>
  )
}

export default App
