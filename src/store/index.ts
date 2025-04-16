import {proxy} from 'valtio';

const state = proxy({
    home: true,
    color: '#195699',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './cat.png',
    fullDecal: './nightSky.webp',
    // for the canvas
    activeEditorTab: 'shapes',
    // for the customizer
    count: 0,
    isCustomizing: false,
    fileName: 'custom-tshirt',
    readOnly: false,
})

  export default state;