import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio'

import {CustomButton} from '../../../commonComponents'

import state from '../../../store'

import {headContentAnimation, headContainerAnimation, headTextAnimation, slideAnimation} from '../../../config/motion.ts'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.home && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./logo.png' alt='Logo' className='w-8 h-8 object-contain'/>
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h3 className='head-text'>
              Style, <br/>your way.
              </h3>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-sm font-normal text-gray-600 text-base'>
              Design your own apparel with our 3D customization tool. Unleash your creativity and express your unique style.
              </p>

              <CustomButton
              type='filled'
              title="Customize now"
              handleClick= {()=> state.home =false}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
              
            </motion.div>

          </motion.div>
       </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home