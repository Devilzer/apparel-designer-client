import React,{useState,useEffect} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {useSnapshot} from 'valtio'

import {CustomButtom} from '../../../commonComponents';
import AiPicker from '../components/aiPicker';
import ColorPicker from '../components/colorPicker';
import FilePicker from '../components/filePicker';
import Tab from '../components/tab';

import {download} from '../../../assets'

import state from '../../../store';

import config from '../../../config/config'
import {downloadCanvasToImage, reader} from '../../../config/helpers';
import {EditorTabs,FilterTabs,DecalTypes} from '../../../config/constants';
import {fadeAnimation,slideAnimation} from '../../../config/motion';


const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.home && (
        <>
          <motion.div 
          key="custom"
          className='absolute top-0 left-0 z-50'
          {...slideAnimation('left')}
          >
            <div
            className='flex items-center min-h-screen'>
              <div
              className='editortabs-container glassmorphism'>
                {EditorTabs.map(tab=>(
                  <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={()=>{}}
                  />
                ))}

              </div>
            </div>
          </motion.div>
          <motion.div
          className='absolute z-50 top-5 right-5'
          {...fadeAnimation}>
            <CustomButtom
            type='filled'
            title='Go Back'
            handleClick={()=>{state.home=true}}
            coustomStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
          <motion.div
          className='filtertabs-container glassmorphism'
          {...slideAnimation('up')}>
            {FilterTabs.map(tab=>(
                  <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab=''
                  handleClick={()=>{}}
                  />
                ))}

          </motion.div>
        </>
      )
      }

    </AnimatePresence>
  )
}

export default Customizer