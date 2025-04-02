import {proxy} from 'valtio';

const state = proxy({
    home: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './dog.png',
    fullDecal: './dog.png',
    // for the canvas
    activeEditorTab: 'shapes',
    // for the customizer
    count: 0,
    isCustomizing: false,
    fileName: 'custom-tshirt',
    readOnly: false,
})

  export default state;