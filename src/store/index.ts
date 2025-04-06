import {proxy} from 'valtio';

const state = proxy({
    home: true,
    color: '#EFBD48',
    isLogoTexture: false,
    isFullTexture: true,
    logoDecal: './dog.png',
    fullDecal: './cat.png',
    // for the canvas
    activeEditorTab: 'shapes',
    // for the customizer
    count: 0,
    isCustomizing: false,
    fileName: 'custom-tshirt',
    readOnly: false,
})

  export default state;