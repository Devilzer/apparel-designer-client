import React,{useState,useEffect} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {useSnapshot} from 'valtio'

import {CustomButton} from '../../../commonComponents';
import AiPicker from '../components/aiPicker';
import ColorPicker from '../components/colorPicker';
import FilePicker from '../components/filePicker';
import Tab from '../components/tab';

import {download} from '../../../assets'

import state from '../../../store';

import {downloadCanvasToImage, reader} from '../../../config/helpers';
import {EditorTabs,FilterTabs,DecalTypes} from '../../../config/constants';
import {fadeAnimation,slideAnimation} from '../../../config/motion';


const Customizer = () => {
  const snap = useSnapshot(state);
  const apiUrl = import.meta.env.VITE_API_URL;

  const [file, setFile] = useState<File|string>('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState<Record<'logoShirt' | 'fullShirt', boolean>>({
    logoShirt:true,
    fullShirt: false,
  });

  const handleDecals = (type:string, result:any) => {
    const decalType = DecalTypes[type];

    (state as any)[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName: 'logoShirt' | 'fullShirt') => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "fullShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }
  
  const readFile = (type:string) => {
    reader(file)
      .then((result:any) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  const handleSubmit = async (type:string) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch(`${apiUrl}?prompt=${prompt}`, {
        method: 'GET',
        headers: {
          "content-type": "image/jpg",
        }
      })

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      handleDecals(type, imageUrl)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }


  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AiPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }

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
                  handleClick={() => {
                    if(activeEditorTab === tab.name) {
                      setActiveEditorTab("");
                      return;
                    }
                    setActiveEditorTab(tab.name)
                  }}
                  />
                ))}

                {generateTabContent()}

              </div>
            </div>
          </motion.div>
          <motion.div
          className='absolute z-50 top-5 right-5'
          {...fadeAnimation}>
            <CustomButton
            type='filled'
            title='Go Back'
            handleClick={()=>{state.home=true}}
            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
          <motion.div
          className='filtertabs-container'
          {...slideAnimation('up')}>
            {FilterTabs.map(tab=>(
                  <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name as 'logoShirt' | 'fullShirt']}
                  handleClick={() => handleActiveFilterTab(tab.name as 'logoShirt' | 'fullShirt')}
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